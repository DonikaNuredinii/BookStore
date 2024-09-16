using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using BookStore.Models;
using BCrypt.Net;
using Microsoft.AspNetCore.Authorization;
using BookStore.DTOs;

namespace BookStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly MyContext _usersContext;
        private readonly IConfiguration _configuration;

        public UserController(MyContext usersContext, IConfiguration configuration)
        {
            _usersContext = usersContext;
            _configuration = configuration;
        }

        [HttpPost("register")]
        public async Task<ActionResult<User>> Register(User user)
        {
            var errors = new Dictionary<string, string>();


            if (!char.IsUpper(user.FirstName[0]))
            {
                errors.Add("firstName", "First name should start with a capital letter.");
            }
            if (!char.IsUpper(user.LastName[0]))
            {
                errors.Add("lastName", "Last name should start with a capital letter.");
            }

    
            var existingUserWithEmail = await _usersContext.Users
                .FirstOrDefaultAsync(u => u.Email == user.Email);
            if (existingUserWithEmail != null)
            {
                errors.Add("email", "Email is already in use.");
            }

            var existingUserWithUsername = await _usersContext.Users
                .FirstOrDefaultAsync(u => u.Username == user.Username);
            if (existingUserWithUsername != null)
            {
                errors.Add("username", "Username is already taken.");
            }


            if (errors.Count > 0)
            {
                return BadRequest(errors);
            }

          
            user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
            _usersContext.Users.Add(user);
            await _usersContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUser), new { UserID = user.UserID }, user);
        }




        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetAllUsers()
        {
            var users = await _usersContext.Users.ToListAsync();
            return Ok(users);
        }

        [HttpGet("count")]
        public async Task<ActionResult<int>> GetTotalUsers()
        {
            var totalUsers = await _usersContext.Users.CountAsync();
            return Ok(totalUsers);
        }
       


        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] Login model)
        {
            var user = await _usersContext.Users.FirstOrDefaultAsync(u => u.Username == model.Username);

            if (user == null)
            {
                return Unauthorized(new { message = "Invalid username" });
            }

            if (!BCrypt.Net.BCrypt.Verify(model.Password, user.Password))
            {
                return Unauthorized(new { message = "Invalid password" });
            }

            var token = GenerateJwtToken(user);

            return Ok(new
            {
                token,
                userId = user.UserID,
                rolesID = user.RolesID, 
                message = "Login successful"
            });
        }


        private string GenerateJwtToken(User user)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtSettings:SecretKey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.UserID.ToString()),
                new Claim("RolesID", user.RolesID.ToString()) // Add role claim
            };

            var token = new JwtSecurityToken(
                issuer: _configuration["JwtSettings:Issuer"],
                audience: _configuration["JwtSettings:Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(double.Parse(_configuration["JwtSettings:ExpiryMinutes"])),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        [HttpGet("{UserID}")]
        public async Task<ActionResult<User>> GetUser(int UserID)
        {
            var user = await _usersContext.Users.FindAsync(UserID);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        [Authorize(Policy = "AdminPolicy")]
        [HttpDelete("{UserID}")]
        public async Task<IActionResult> DeleteUser(int UserID)
        {
            var user = await _usersContext.Users.FindAsync(UserID);
            if (user == null)
            {
                return NotFound();
            }

            _usersContext.Users.Remove(user);
            await _usersContext.SaveChangesAsync();

            return NoContent();
        }
        [Authorize]
        [HttpPut("{UserID}/profile")]
        public async Task<ActionResult> UpdateProfile(int UserID, [FromBody] UserUpdateDTO userDto)
        {
            if (UserID != userDto.UserID)
            {
                return BadRequest(new { message = "User ID mismatch" });
            }

            var existingUser = await _usersContext.Users.FindAsync(UserID);
            if (existingUser == null)
            {
                return NotFound(new { message = "User not found" });
            }

           
            existingUser.FirstName = userDto.FirstName;
            existingUser.LastName = userDto.LastName;
            existingUser.PhoneNumber = userDto.PhoneNumber;
            existingUser.Email = userDto.Email;
            existingUser.RolesID = userDto.RolesID;

            
            _usersContext.Entry(existingUser).State = EntityState.Modified;

            try
            {
                await _usersContext.SaveChangesAsync();
                return NoContent(); 
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while saving the entity changes.", detail = ex.Message });
            }
        }




        [Authorize]
        [HttpPut("{UserID}/update-password")]
        public async Task<IActionResult> UpdatePassword(int UserID, [FromBody] PasswordUpdateModel model)
        {
            var user = await _usersContext.Users.FindAsync(UserID);

            if (user == null)
            {
                return NotFound(new { message = "User not found." });
            }

            if (!BCrypt.Net.BCrypt.Verify(model.CurrentPassword, user.Password))
            {
                return BadRequest(new { message = "Current password is incorrect." });
            }

            if (model.NewPassword.Length < 6)
            {
                return BadRequest(new { message = "New password must be at least 6 characters." });
            }

            if (model.NewPassword != model.ConfirmPassword)
            {
                return BadRequest(new { message = "Passwords do not match." });
            }
            user.Password = BCrypt.Net.BCrypt.HashPassword(model.NewPassword);

            await _usersContext.SaveChangesAsync();

            return NoContent();
        }
    }
}

