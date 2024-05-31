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
    public class OrderDetailsController : ControllerBase
    {
        private readonly MyContext _context;

        public OrderDetailsController(MyContext context)
        {
            _context = context;
        }

        // GET: api/OrderDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OrderDetails>>> GetOrderDetails()
        {
            return await _context.OrderDetails.ToListAsync();
        }

        // GET: api/OrderDetails/5
        [HttpGet("{OrderDetailsID}")]
        public async Task<ActionResult<OrderDetails>> GetOrderDetails(int OrderDetailsID)
        {
            var orderDetails = await _context.OrderDetails.FindAsync(OrderDetailsID);

            if (orderDetails == null)
            {
                return NotFound();
            }

            return orderDetails;
        }

        // POST: api/OrderDetails
        [HttpPost]
        public async Task<ActionResult<OrderDetails>> PostOrderDetails(OrderDetails orderDetails)
        {
            _context.OrderDetails.Add(orderDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetOrderDetails), new {OrderDetailsID = orderDetails.OrderDetailsID }, orderDetails);
        }

        // DELETE: api/OrderDetails/5
        [HttpDelete("{OrderDetailsID}")]
        public async Task<IActionResult> DeleteOrderDetails(int OrderDetailsID)
        {
            var orderDetails = await _context.OrderDetails.FindAsync(OrderDetailsID);
            if (orderDetails == null)
            {
                return NotFound();
            }

            _context.OrderDetails.Remove(orderDetails);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // PUT: api/OrderDetails/5
        [HttpPut("{OrderDetailsID}")]
        public async Task<IActionResult> PutOrderDetails(int OrderDetailsID, OrderDetails orderDetails)
        {
            if (OrderDetailsID != orderDetails.OrderDetailsID)
            {
                return BadRequest();
            }

            _context.Entry(orderDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderDetailsExists(OrderDetailsID))
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

        private bool OrderDetailsExists(int OrderDetailsID)
        {
            return _context.OrderDetails.Any(e => e.OrderDetailsID == OrderDetailsID);
        }
    }
}
