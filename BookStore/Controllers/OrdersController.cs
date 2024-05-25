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
    public class OrderController : ControllerBase
    {
        private readonly MyContext _ordersContext;

        public OrderController(MyContext ordersContext)
        {
            _ordersContext = ordersContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Orders>>> GetOrders()
        {
            var orders = await _ordersContext.Orders.ToListAsync();
            if (orders == null || orders.Count == 0)
            {
                return NotFound();
            }
            return orders;
        }

        [HttpGet("{ordersId}")]
        public async Task<ActionResult<Orders>> GetOrder(int ordersId)
        {
            var order = await _ordersContext.Orders.FindAsync(ordersId);
            if (order == null)
            {
                return NotFound();
            }
            return order;
        }

        [HttpPost]
        public async Task<ActionResult<Orders>> PostOrder(Orders order)
        {
            _ordersContext.Orders.Add(order);
            await _ordersContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetOrder), new { ordersId = order.OrdersId }, order);
        }

        [HttpPut("{ordersId}")]
        public async Task<ActionResult> PutOrder(int ordersId, Orders order)
        {
            if (ordersId != order.OrdersId)
            {
                return BadRequest();
            }

            _ordersContext.Entry(order).State = EntityState.Modified;

            try
            {
                await _ordersContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Concurrency error occurred.");
            }

            return Ok();
        }

        [HttpDelete("{ordersId}")]
        public async Task<ActionResult> DeleteOrder(int ordersId)
        {
            var order = await _ordersContext.Orders.FindAsync(ordersId);
            if (order == null)
            {
                return NotFound();
            }

            _ordersContext.Orders.Remove(order);
            await _ordersContext.SaveChangesAsync();

            return Ok();
        }
    }
}
