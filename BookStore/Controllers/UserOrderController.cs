using BookStore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserOrdersController : ControllerBase
    {
        private readonly MyContext _context;

        public UserOrdersController(MyContext context)
        {
            _context = context;
        }

        // GET: api/UserOrders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserOrder>>> GetUserOrders()
        {
            return await _context.UserOrder.ToListAsync();
        }

        // GET: api/UserOrders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserOrder>> GetUserOrder(int id)
        {
            var userOrder = await _context.UserOrder.FindAsync(id);

            if (userOrder == null)
            {
                return NotFound();
            }

            return userOrder;
        }

        // POST: api/UserOrders
        [HttpPost]
        public async Task<ActionResult<UserOrder>> PostUserOrder(UserOrder userOrder)
        {
            _context.UserOrder.Add(userOrder);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUserOrder), new { id = userOrder.UserOrderId }, userOrder);
        }

        // DELETE: api/UserOrders/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserOrder(int id)
        {
            var userOrder = await _context.UserOrder.FindAsync(id);
            if (userOrder == null)
            {
                return NotFound();
            }

            _context.UserOrder.Remove(userOrder);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // PUT: api/UserOrders/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserOrder(int id, UserOrder userOrder)
        {
            if (id != userOrder.UserOrderId)
            {
                return BadRequest();
            }

            _context.Entry(userOrder).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserOrderExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        private bool UserOrderExists(int id)
        {
            return _context.UserOrder.Any(e => e.UserOrderId == id);
        }
    }
}
