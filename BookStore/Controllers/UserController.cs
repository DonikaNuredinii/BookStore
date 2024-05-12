using BookStore.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using BookStore.Models;


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
            if(_usersContext.User == null)
            {
                return NotFound();
            }
            return await _usersContext.User.ToListAsync();
        }
        [HttpGet("{UserID}")]
        public async Task<ActionResult<User>> GetUser(int UserID){
            if(_usersContext.User == null){
                return NotFound();
            }
            var user = await _usersContext.User.FindAsync(UserID);
            if(user == null){
                return NotFound();
            }else{
                return user;
            }
        }
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _usersContext.User.Add(user);
            await _usersContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUser), new {UserID = user.UserID }, user);

        }

        [HttpPut("{UserID}")]
        public async Task<ActionResult> PutUser(int UserID, User user)
        {
            if( UserID != user.UserID){

                return BadRequest();

            }
            _usersContext.Entry(user).State = EntityState.Modified;
            try
            {
                await _usersContext.SaveChangesAsync();
            }
            catch(DbUpdateConcurrencyException)
            {
                throw;
            }
            return Ok();
        }

        [HttpDelete("{UserID}")]

        public async Task<ActionResult> DeleteUser(int UserID)
        {
            if(_usersContext.User == null)
            {
                return NotFound();
            }
            var user = await _usersContext.User.FindAsync(UserID);
            if(user == null)
            {
                return NotFound();
            }
            _usersContext.User.Remove(user);
            await _usersContext.SaveChangesAsync();
            return Ok();
        }

    }
}