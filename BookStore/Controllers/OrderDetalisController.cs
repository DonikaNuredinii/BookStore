using BookStore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace BookStore.Controllers
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

        [HttpGet]
        public async Task<IActionResult> GetOrderDetails()
        {
            var orderDetails = await _context.OrderDetails.Include(od => od.CartItem).ToListAsync();
            return Ok(orderDetails);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<OrderDetails>> GetOrderDetails(int id)
        {
            var orderDetails = await _context.OrderDetails.Include(od => od.CartItem).FirstOrDefaultAsync(od => od.OrderDetailsID == id);
            if (orderDetails == null)
            {
                return NotFound();
            }
            return orderDetails;
        }

        [HttpPost]
        public async Task<IActionResult> PostOrderDetails(OrderDetails orderDetails)
        {
            _context.OrderDetails.Add(orderDetails);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetOrderDetails), new { id = orderDetails.OrderDetailsID }, orderDetails);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrderDetails(int id)
        {
            var orderDetails = await _context.OrderDetails.FindAsync(id);
            if (orderDetails == null)
            {
                return NotFound();
            }

            _context.OrderDetails.Remove(orderDetails);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrderDetails(int id, OrderDetails orderDetails)
        {
            if (id != orderDetails.OrderDetailsID)
            {
                return BadRequest();
            }

            _context.Entry(orderDetails).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
