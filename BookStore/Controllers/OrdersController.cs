using BookStore.DTOs;
using BookStore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace BookStore.Controllers
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

                if (orders == null || !orders.Any())
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

        [HttpPost]
        public async Task<IActionResult> PostOrder(OrdersDto orderDto)
        {
            if (orderDto == null)
            {
                return BadRequest("Invalid order data.");
            }

            try
            {
                var orderDetails = new OrderDetails
                {
                    TotalPrice = orderDto.OrderDetails[0].TotalPrice,
                    InvoiceDate = orderDto.OrderDetails[0].InvoiceDate,
                    OrderShipDate = orderDto.OrderDetails[0].OrderShipDate,
                    InvoiceNumber = orderDto.OrderDetails[0].InvoiceNumber,
                    CartItemId = orderDto.OrderDetails[0].CartItemId
                };

                _context.OrderDetails.Add(orderDetails);
                await _context.SaveChangesAsync();

                var order = new Orders
                {
                    OrderDate = orderDto.OrderDate,
                    Address = orderDto.Address,
                    City = orderDto.City,
                    CountryID = orderDto.CountryID,
                    ZipCode = orderDto.ZipCode,
                    DiscountID = orderDto.DiscountID,
                    GiftCardID = orderDto.GiftCardID,
                    Payment = new Payment
                    {
                        Amount = orderDto.Payment.Amount,
                        PaymentMethod = orderDto.Payment.PaymentMethod,
                        LastFourDigits = orderDto.Payment.LastFourDigits,
                        TransactionID = orderDto.Payment.TransactionID
                    },
                    OrderDetailsID = orderDetails.OrderDetailsID
                };

                _context.Orders.Add(order);
                await _context.SaveChangesAsync();

                return Ok(order);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    message = "An error occurred while saving the entity changes.",
                    detail = ex.InnerException?.Message ?? ex.Message
                });
            }
        }



        [HttpPut("{orderId}")]
        public async Task<IActionResult> PutOrder(int orderId, OrdersDto ordersDto)
        {
            if (orderId != ordersDto.OrdersId)
            {
                return BadRequest();
            }

            var order = await _context.Orders.Include(o => o.OrderDetails).FirstOrDefaultAsync(o => o.OrdersId == orderId);
            if (order == null)
            {
                return NotFound();
            }

            try
            {
                order.OrderDate = ordersDto.OrderDate;
                order.Address = ordersDto.Address;
                order.City = ordersDto.City;
                order.CountryID = ordersDto.CountryID;
                order.ZipCode = ordersDto.ZipCode;
                order.DiscountID = ordersDto.DiscountID;
                order.GiftCardID = ordersDto.GiftCardID;

                _context.Entry(order).State = EntityState.Modified;

                // Update OrderDetails here if necessary

                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch (DbUpdateConcurrencyException)
            {
                return NotFound();
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
        [HttpGet("order-counts")]
        public async Task<ActionResult<IEnumerable<CountryOrderCountDto>>> GetOrderCountByCountry()
        {
            try
            {
                var orderCounts = await _context.Orders
                    .GroupBy(o => o.CountryID) 
                    .Select(g => new CountryOrderCountDto
                    {
                        CountryName = _context.Countries.FirstOrDefault(c => c.CountryID == g.Key).CountryName,
                        TotalOrders = g.Count()
                    })
                    .ToListAsync();

                return Ok(orderCounts);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving order counts by country.");
                return StatusCode(500, new { message = "Internal server error", detail = ex.Message });
            }
        }
        public class CountryOrderCountDto
        {
            public string CountryName { get; set; } 
            public int TotalOrders { get; set; }
        }

        [HttpGet("top-customers")]
        public async Task<ActionResult<IEnumerable<TopCustomerDto>>> GetTopCustomers()
        {
            try
            {
                var topCustomers = await _context.UserOrder
                    .Include(uo => uo.User)
                    .Include(uo => uo.Orders)
                        .ThenInclude(o => o.OrderDetails)
                    .GroupBy(uo => new
                    {
                        UserId = uo.UserId,
                        UserName = uo.User.FirstName + " " + uo.User.LastName
                    })
                    .Select(g => new TopCustomerDto
                    {
                        Id = g.Key.UserId,
                        Name = g.Key.UserName,
                        TotalSpent = g.Sum(uo => uo.Orders.OrderDetails.TotalPrice),
                        OrderCount = g.Count()
                    })
                    .OrderByDescending(tc => tc.TotalSpent)
                    .Take(5)
                    .ToListAsync();

                return Ok(topCustomers);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving top customers.");
                return StatusCode(500, new { message = "Internal server error", detail = ex.Message });
            }
        }

        [HttpGet("weekly-sales")]
        public async Task<ActionResult<IEnumerable<WeeklySalesDto>>> GetWeeklySales()
        {
            try
            {
                var calendar = System.Globalization.CultureInfo.CurrentCulture.Calendar;

                
                var orders = await _context.Orders
                    .Include(o => o.OrderDetails)
                    .Where(o => o.OrderDetails.InvoiceDate >= DateTime.UtcNow.AddDays(-30)) 
                    .ToListAsync();
                var weeklySales = orders
                    .GroupBy(o => new
                    {
                        Year = o.OrderDetails.InvoiceDate.Year,
                        Week = calendar.GetWeekOfYear(o.OrderDetails.InvoiceDate, System.Globalization.CalendarWeekRule.FirstDay, DayOfWeek.Monday)
                    })
                    .Select(g => new WeeklySalesDto
                    {
                        Week = $"{g.Key.Year}-W{g.Key.Week}",
                        TotalSales = g.Sum(o => o.OrderDetails.TotalPrice),
                    })
                    .OrderBy(ws => ws.Week)
                    .ToList();

                return Ok(weeklySales);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving weekly sales.");
                return StatusCode(500, new { message = "Internal server error", detail = ex.Message });
            }
        }



        public class WeeklySalesDto
        {
            public string Week { get; set; }
            public decimal TotalSales { get; set; }
        }



        [HttpDelete("{orderId}")]
        public async Task<IActionResult> DeleteOrder(int orderId)
        {
            var order = await _context.Orders.Include(o => o.OrderDetails).FirstOrDefaultAsync(o => o.OrdersId == orderId);
            if (order == null)
            {
                return NotFound();
            }

            _context.Orders.Remove(order);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
