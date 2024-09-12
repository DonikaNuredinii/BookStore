using BookStore.DTOs;
using BookStore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
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

        // GET: api/Order
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

        // GET: api/Order/{ordersId}
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

        [HttpGet("total-earnings")]
        public async Task<ActionResult<decimal>> GetTotalEarnings()
        {
            var totalEarnings = await _ordersContext.Payment
                .SumAsync(p => p.Amount);

            return Ok(totalEarnings);
        }

        [HttpGet("orders-summary")]
        public async Task<ActionResult> GetOrdersSummary()
        {
            var bookOrdersCount = await _ordersContext.OrderDetails
                .Include(od => od.CartItem)
                .CountAsync(od => od.CartItem.BookId != null);
          
            var accessoriesOrdersCount = await _ordersContext.OrderDetails
                .Include(od => od.CartItem)
                .CountAsync(od => od.CartItem.AccessoriesID != null);

            var ebookLoansCount = await _ordersContext.EbookLoans.CountAsync();

            var summary = new
            {
                bookOrders = bookOrdersCount,
                accessoriesOrders = accessoriesOrdersCount,
                ebookLoans = ebookLoansCount
            };

            return Ok(summary);
        }

        


        // POST: api/Order
        [HttpPost]
        public async Task<ActionResult<Orders>> CreateOrder([FromBody] OrdersDto ordersDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var order = new Orders
            {
                OrderDate = DateTime.Now,
                Address = ordersDto.Address,
                City = ordersDto.City,
                CountryID = ordersDto.CountryID,
                ZipCode = ordersDto.ZipCode,
                DiscountID = ordersDto.DiscountID,
                GiftCardID = ordersDto.GiftCardID,
                OrderShipDate = ordersDto.OrderShipDate,
                OrderDetails = new List<OrderDetails>()
            };

            _ordersContext.Orders.Add(order);
            await _ordersContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetOrder), new { ordersId = order.OrdersId }, order);
        }

        // PUT: api/Order/{ordersId}
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

        // DELETE: api/Order/{ordersId}
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
