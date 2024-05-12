using BookStore.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using System.Threading.Tasks; 

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly MyContext _usersContext;

        public UserController(MyContext usersContext)
        {
            _usersContext = usersContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> getUsers()
        {
            var users = await _usersContext.Users.ToListAsync(); 
            if (users == null || users.Count == 0)
            {
                return NotFound();
            }
            return users;
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

        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _usersContext.Users.Add(user); 
            await _usersContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUser), new { UserID = user.UserID }, user);
        }

        [HttpPut("{UserID}")]
        public async Task<ActionResult> PutUser(int UserID, User user)
        {
            if (UserID != user.UserID)
            {
                return BadRequest();
            }

            _usersContext.Entry(user).State = EntityState.Modified;
            try
            {
                await _usersContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return Ok();
        }

        [HttpDelete("{UserID}")]

		public async Task<ActionResult> DeleteUser(int UserID)
		{
			if (_usersContext.Users == null)
			{
				return NotFound();
			}
			var user = await _usersContext.Users.FindAsync(UserID);
			if (user == null)
			{
				return NotFound();
			}
			_usersContext.Users.Remove(user);
			await _usersContext.SaveChangesAsync();
			return Ok();
		}
    }
}
