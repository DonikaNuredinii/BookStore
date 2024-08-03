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

        // GET: api/OrderDetails
        [HttpGet]
        public async Task<IActionResult> GetOrderDetails()
        {
            try
            {
                var orderDetails = await _context.OrderDetails.Include(od => od.CartItem).ToListAsync();
                return Ok(orderDetails);
            }
            catch (Exception ex)
            {
                // Log the exception
                Console.WriteLine($"Exception: {ex.Message}");
                Console.WriteLine($"Inner Exception: {ex.InnerException?.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        // GET: api/OrderDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<OrderDetails>> GetOrderDetails(int id)
        {
            try
            {
                var orderDetails = await _context.OrderDetails.Include(od => od.CartItem).FirstOrDefaultAsync(od => od.OrderDetailsID == id);

                if (orderDetails == null)
                {
                    return NotFound();
                }

                return orderDetails;
            }
            catch (Exception ex)
            {
                // Log the exception
                Console.WriteLine($"Exception: {ex.Message}");
                Console.WriteLine($"Inner Exception: {ex.InnerException?.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        // POST: api/OrderDetails
        [HttpPost]
        public async Task<IActionResult> PostOrderDetails(OrderDetails orderDetails)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                // Convert 0 to null for foreign key properties in CartItem
                if (orderDetails.CartItem != null)
                {
                    if (orderDetails.CartItem.BookId == 0)
                    {
                        orderDetails.CartItem.BookId = null;
                    }
                    if (orderDetails.CartItem.AccessoriesID == 0)
                    {
                        orderDetails.CartItem.AccessoriesID = null;
                    }
                    if (orderDetails.CartItem.GiftCardId == 0)
                    {
                        orderDetails.CartItem.GiftCardId = null;
                    }
                }

                _context.OrderDetails.Add(orderDetails);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetOrderDetails), new { id = orderDetails.OrderDetailsID }, orderDetails);
            }
            catch (Exception ex)
            {
                // Log the exception
                Console.WriteLine($"Exception: {ex.Message}");
                Console.WriteLine($"Inner Exception: {ex.InnerException?.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while saving the entity changes.");
            }
        }

        // DELETE: api/OrderDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrderDetails(int id)
        {
            try
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
            catch (Exception ex)
            {
                // Log the exception
                Console.WriteLine($"Exception: {ex.Message}");
                Console.WriteLine($"Inner Exception: {ex.InnerException?.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while deleting the entity.");
            }
        }

        // PUT: api/OrderDetails/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrderDetails(int id, OrderDetails orderDetails)
        {
            if (id != orderDetails.OrderDetailsID)
            {
                return BadRequest();
            }

            try
            {
                // Convert 0 to null for foreign key properties in CartItem
                if (orderDetails.CartItem != null)
                {
                    if (orderDetails.CartItem.BookId == 0)
                    {
                        orderDetails.CartItem.BookId = null;
                    }
                    if (orderDetails.CartItem.AccessoriesID == 0)
                    {
                        orderDetails.CartItem.AccessoriesID = null;
                    }
                    if (orderDetails.CartItem.GiftCardId == 0)
                    {
                        orderDetails.CartItem.GiftCardId = null;
                    }
                }

                _context.Entry(orderDetails).State = EntityState.Modified;

                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderDetailsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            catch (Exception ex)
            {
                // Log the exception
                Console.WriteLine($"Exception: {ex.Message}");
                Console.WriteLine($"Inner Exception: {ex.InnerException?.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while updating the entity.");
            }

            return NoContent();
        }

        private bool OrderDetailsExists(int id)
        {
            return _context.OrderDetails.Any(e => e.OrderDetailsID == id);
        }
    }
}
