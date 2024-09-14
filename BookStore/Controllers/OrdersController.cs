using BookStore.DTOs;
using BookStore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly MyContext _ordersContext;
        private readonly ILogger<OrderController> _logger; // Added logger

        public OrderController(MyContext ordersContext, ILogger<OrderController> logger)
        {
            _ordersContext = ordersContext;
            _logger = logger;
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
        public async Task<IActionResult> CreateOrder([FromBody] OrdersDto ordersDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var order = new Orders
                {
                    OrderDate = ordersDto.OrderDate,
                    Address = ordersDto.Address,
                    City = ordersDto.City,
                    CountryID = ordersDto.CountryID,
                    ZipCode = ordersDto.ZipCode,
                    DiscountID = ordersDto.DiscountID,
                    GiftCardID = ordersDto.GiftCardID != null ? ordersDto.GiftCardID : (int?)null, // Handle null gift card
                    OrderDetails = new List<OrderDetails>()
                };

                foreach (var detailDto in ordersDto.OrderDetails)
                {
                    var orderDetail = new OrderDetails
                    {
                        TotalPrice = detailDto.TotalPrice,
                        InvoiceDate = detailDto.InvoiceDate,
                        OrderShipDate = detailDto.OrderShipDate,
                        InvoiceNumber = detailDto.InvoiceNumber,
                        OrdersId = order.OrdersId // Set foreign key
                    };

                    if (detailDto.CartItem != null)
                    {
                        orderDetail.CartItem = new CartItem
                        {
                            Quantity = detailDto.CartItem.Quantity,
                            BookId = detailDto.CartItem.BookId,
                            AccessoriesID = detailDto.CartItem.AccessoriesID,
                            GiftCardId = detailDto.CartItem.GiftCardId
                        };
                    }

                    order.OrderDetails.Add(orderDetail);
                }

                _ordersContext.Orders.Add(order);
                await _ordersContext.SaveChangesAsync();

                return CreatedAtAction(nameof(GetOrder), new { id = order.OrdersId }, order);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Order creation failed with error: " + ex.Message);

                // Return detailed error including inner exception
                return StatusCode(500, new
                {
                    message = "Internal server error",
                    detail = ex.InnerException?.Message ?? ex.Message
                });
            }

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
