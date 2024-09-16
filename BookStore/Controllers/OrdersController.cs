using BookStore.DTOs;
using BookStore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly MyContext _context;
        private readonly ILogger<OrderController> _logger;

        public OrderController(MyContext context, ILogger<OrderController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Orders>>> GetOrders()
        {
            try
            {
                var orders = await _context.Orders
                    .Include(o => o.OrderDetails)
                    .ThenInclude(od => od.CartItem)
                    .ToListAsync();

                if (orders == null || orders.Count == 0)
                {
                    return NotFound();
                }

                return Ok(orders);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving orders.");
                return StatusCode(500, new { message = "Internal server error", detail = ex.Message });
            }
        }

        [HttpGet("{orderId}")]
        public async Task<ActionResult<Orders>> GetOrder(int orderId)
        {
            try
            {
                var order = await _context.Orders
                    .Include(o => o.OrderDetails)
                    .ThenInclude(od => od.CartItem)
                    .FirstOrDefaultAsync(o => o.OrdersId == orderId);

                if (order == null)
                {
                    return NotFound();
                }

                return Ok(order);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving order with ID {OrderId}.", orderId);
                return StatusCode(500, new { message = "Internal server error", detail = ex.Message });
            }
        }

        // GET: api/order/total-earnings
        [HttpGet("total-earnings")]
        public async Task<ActionResult<decimal>> GetTotalEarnings()
        {
            var totalEarnings = await _context.Payment
                .SumAsync(p => p.Amount);

            return Ok(totalEarnings);
        }

        // GET: api/order/orders-summary
        [HttpGet("orders-summary")]
        public async Task<ActionResult> GetOrdersSummary()
        {
            var bookOrdersCount = await _context.OrderDetails
                .Include(od => od.CartItem)
                .CountAsync(od => od.CartItem.BookId != null);

            var accessoriesOrdersCount = await _context.OrderDetails
                .Include(od => od.CartItem)
                .CountAsync(od => od.CartItem.AccessoriesID != null);

            var ebookLoansCount = await _context.EbookLoans.CountAsync();

            var summary = new
            {
                bookOrders = bookOrdersCount,
                accessoriesOrders = accessoriesOrdersCount,
                ebookLoans = ebookLoansCount
            };

            return Ok(summary);
        }

        // GET: api/orders/timeline
        [HttpGet("timeline")]
        public IActionResult GetOrdersTimeline()
        {
            var ordersOverTime = _context.Orders
                .GroupBy(o => new { Month = o.OrderDate.Month, Year = o.OrderDate.Year })
                .Select(g => new { Date = $"{g.Key.Month}/{g.Key.Year}", Count = g.Count() })
                .ToList();

            return Ok(ordersOverTime);
        }




        [HttpPost]
        public async Task<IActionResult> CreateOrder([FromBody] OrdersDto ordersDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            using var transaction = await _context.Database.BeginTransactionAsync();
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
                    GiftCardID = ordersDto.GiftCardID,
                    OrderDetails = new List<OrderDetails>()
                };

                _context.Orders.Add(order);
                await _context.SaveChangesAsync(); // Save order to get OrdersId

                foreach (var detailDto in ordersDto.OrderDetails)
                {
                    var orderDetail = new OrderDetails
                    {
                        TotalPrice = detailDto.TotalPrice,
                        InvoiceDate = detailDto.InvoiceDate,
                        OrderShipDate = detailDto.OrderShipDate,
                        InvoiceNumber = GenerateUniqueInvoiceNumber(),
                        OrdersId = order.OrdersId
                    };

                    if (detailDto.CartItem != null)
                    {
                        var cartItem = new CartItem
                        {
                            Quantity = detailDto.CartItem.Quantity,
                            BookId = detailDto.CartItem.BookId,
                            AccessoriesID = detailDto.CartItem.AccessoriesID,
                            GiftCardId = detailDto.CartItem.GiftCardId
                        };

                        _context.CartItems.Add(cartItem);
                        await _context.SaveChangesAsync(); // Save cart item to get CartItemId

                        orderDetail.CartItemId = cartItem.CartItemId;
                    }

                    order.OrderDetails.Add(orderDetail);
                }

                _context.OrderDetails.AddRange(order.OrderDetails);
                await _context.SaveChangesAsync();

                await transaction.CommitAsync();

                return CreatedAtAction(nameof(GetOrder), new { orderId = order.OrdersId }, order);
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                _logger.LogError(ex, "Order creation failed. Exception: {Message}", ex.InnerException?.Message);
                return StatusCode(500, new { message = "Internal server error", detail = ex.InnerException?.Message });
            }
        }


        private string GenerateUniqueInvoiceNumber()
        {
            return $"INV-{DateTime.UtcNow:yyyyMMddHHmmss}-{new Random().Next(1000, 9999)}";
        }

        [HttpPut("{orderId}")]
        public async Task<ActionResult> PutOrder(int orderId, Orders order)
        {
            if (orderId != order.OrdersId)
            {
                return BadRequest();
            }

            _context.Entry(order).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                _logger.LogError(ex, "Concurrency error occurred while updating order with ID {OrderId}.", orderId);
                return StatusCode(500, "Concurrency error occurred.");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while updating order with ID {OrderId}.", orderId);
                return StatusCode(500, new { message = "Internal server error", detail = ex.Message });
            }

            return Ok();
        }

        [HttpDelete("{orderId}")]
        public async Task<ActionResult> DeleteOrder(int orderId)
        {
            try
            {
                var order = await _context.Orders.FindAsync(orderId);
                if (order == null)
                {
                    return NotFound();
                }

                _context.Orders.Remove(order);
                await _context.SaveChangesAsync();

                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while deleting order with ID {OrderId}.", orderId);
                return StatusCode(500, new { message = "Internal server error", detail = ex.Message });
            }
        }
    }
}
