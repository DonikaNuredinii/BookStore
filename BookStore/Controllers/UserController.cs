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
            try
            {
                user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
                _usersContext.Users.Add(user);
                await _usersContext.SaveChangesAsync();
                return CreatedAtAction(nameof(GetUser), new { UserID = user.UserID }, user);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred during registration.", detail = ex.InnerException?.Message });
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetAllUsers()
        {
            var users = await _usersContext.Users.ToListAsync();
            return Ok(users);
        }

        [HttpGet("total-users")]
        public async Task<ActionResult<int>> GetTotalUsers()
        {
            var totalUsers = await _usersContext.Users.CountAsync();
            return Ok(totalUsers);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] Login model)
        {
            var user = await _usersContext.Users
                .FirstOrDefaultAsync(u => u.Username == model.Username);

            if (user == null)
            {
                return Unauthorized(new { message = "Invalid username" });
            }

            // Validate the password
            if (!BCrypt.Net.BCrypt.Verify(model.Password, user.Password))
            {
                return Unauthorized(new { message = "Invalid password" });
            }

            // Generate the JWT token
            var token = GenerateJwtToken(user);
            return Ok(new { token, userId = user.UserID, message = "Login successful" });
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
        [HttpPut("{UserID}")]
        public async Task<ActionResult> PutUser(int UserID, User user)
        {
            if (UserID != user.UserID)
            {
                return BadRequest(new { message = "User ID mismatch" });
            }

            var existingUser = await _usersContext.Users.FindAsync(UserID);
            if (existingUser == null)
            {
                return NotFound(new { message = "User not found" });
            }

            // Update user details
            existingUser.FirstName = user.FirstName;
            existingUser.LastName = user.LastName;
            existingUser.PhoneNumber = user.PhoneNumber;
            existingUser.Email = user.Email;
            existingUser.Username = user.Username;
            existingUser.RolesID = user.RolesID;

            // Only update the password if it's provided and it's different
            if (!string.IsNullOrEmpty(user.Password))
            {
                if (user.Password.Length < 6)
                {
                    return BadRequest(new { message = "Password must be at least 6 characters." });
                }

                // Check if the password has been changed
                if (!BCrypt.Net.BCrypt.Verify(user.Password, existingUser.Password))
                {
                    existingUser.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
                }
            }

            _usersContext.Entry(existingUser).State = EntityState.Modified;

            try
            {
                await _usersContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_usersContext.Users.Any(e => e.UserID == UserID))
                {
                    return NotFound(new { message = "User not found during update" });
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
    }
}
