using BookStore.Models;
using BookStore.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

        // GET: api/orderdetails
        [HttpGet]
        public async Task<IActionResult> GetOrderDetails()
        {
            var orderDetails = await _context.OrderDetails.Include(od => od.CartItem).ToListAsync();
            return Ok(orderDetails);
        }

        // GET: api/orderdetails/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<OrderDetails>> GetOrderDetails(int id)
        {
            var orderDetails = await _context.OrderDetails
                .Include(od => od.CartItem)
                .FirstOrDefaultAsync(od => od.OrderDetailsID == id);

            if (orderDetails == null)
            {
                return NotFound();
            }

            return Ok(orderDetails);
        }

        // POST: api/orderdetails
        [HttpPost]
        public async Task<IActionResult> PostOrderDetails([FromBody] OrderDetailsDto orderDetailsDto)
        {
            if (orderDetailsDto == null)
            {
                return BadRequest("Invalid order details.");
            }
            var cartItem = await _context.CartItems.FindAsync(orderDetailsDto.CartItemId);
            if (cartItem == null)
            {
                return BadRequest("Invalid CartItem ID.");
            }

            var orderDetails = new OrderDetails
            {
                TotalPrice = orderDetailsDto.TotalPrice,
                InvoiceDate = orderDetailsDto.InvoiceDate,
                OrderShipDate = orderDetailsDto.OrderShipDate,
                InvoiceNumber = orderDetailsDto.InvoiceNumber,
                CartItemId = orderDetailsDto.CartItemId
            };

            _context.OrderDetails.Add(orderDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetOrderDetails), new { id = orderDetails.OrderDetailsID }, orderDetails);
        }

        // DELETE: api/orderdetails/{id}
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

        // PUT: api/orderdetails/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrderDetails(int id, [FromBody] OrderDetailsDto orderDetailsDto)
        {
            if (orderDetailsDto == null || id == 0)
            {
                return BadRequest("Invalid order details or ID.");
            }

      
            var cartItem = await _context.CartItems.FindAsync(orderDetailsDto.CartItemId);
            if (cartItem == null)
            {
                return BadRequest("Invalid CartItem ID.");
            }

            var existingOrderDetails = await _context.OrderDetails.FindAsync(id);
            if (existingOrderDetails == null)
            {
                return NotFound("Order details not found.");
            }

            existingOrderDetails.TotalPrice = orderDetailsDto.TotalPrice;
            existingOrderDetails.InvoiceDate = orderDetailsDto.InvoiceDate;
            existingOrderDetails.OrderShipDate = orderDetailsDto.OrderShipDate;
            existingOrderDetails.InvoiceNumber = orderDetailsDto.InvoiceNumber;
            existingOrderDetails.CartItemId = orderDetailsDto.CartItemId;

            _context.Entry(existingOrderDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderDetailsExists(id))
                {
                    return NotFound();
                }
                throw;
            }

            return NoContent();
        }
        private bool OrderDetailsExists(int id)
        {
            return _context.OrderDetails.Any(e => e.OrderDetailsID == id);
        }
    }
}
