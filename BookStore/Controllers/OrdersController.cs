using BookStore.DTOs;
using BookStore.Models;
using BookStore.Services;
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
        private readonly EmailService _emailService;
        public OrderController(MyContext context, ILogger<OrderController> logger, EmailService emailService)
        {
            _context = context;
            _logger = logger;
            _emailService = emailService;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Orders>>> GetOrders()
        {
            try
            {
                var orders = await _context.Orders
                    .Include(o => o.OrderDetails)
                    .ThenInclude(od => od.CartItems)
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
                    .ThenInclude(od => od.CartItems)
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
                var user = await _context.Users.FindAsync(orderDto.UserID);
                if (user == null)
                {
                    return BadRequest("User not found.");
                }

                var orderDetails = new OrderDetails
                {
                    TotalPrice = orderDto.OrderDetails.TotalPrice,
                    InvoiceDate = orderDto.OrderDetails.InvoiceDate,
                    OrderShipDate = orderDto.OrderDetails.OrderShipDate,
                    InvoiceNumber = orderDto.OrderDetails.InvoiceNumber,
                    CartItemIds = orderDto.OrderDetails.CartItemIds 
                };

                var order = new Orders
                {
                    OrderDate = orderDto.OrderDate,
                    Address = orderDto.Address,
                    City = orderDto.City,
                    CountryID = orderDto.CountryID,
                    ZipCode = orderDto.ZipCode,
                    Email = orderDto.Email,
                    DiscountID = orderDto.DiscountID,
                    GiftCardID = orderDto.GiftCardID,
                    Payment = new Payment
                    {
                        Amount = orderDto.Payment.Amount,
                        LastFourDigits = orderDto.Payment.LastFourDigits,
                        PaymentMethod = orderDto.Payment.PaymentMethod,
                        TransactionID = orderDto.Payment.TransactionID
                    },
                    OrderDetails = orderDetails, 
                    UserID = orderDto.UserID,
                };

                _context.Orders.Add(order);
                await _context.SaveChangesAsync();

               
                var recipientEmails = new[] { orderDto.Email };
                var invoiceNumber = orderDto.OrderDetails.InvoiceNumber;
                var totalPrice = orderDto.OrderDetails.TotalPrice;
                var invoiceDate = orderDto.OrderDetails.InvoiceDate;
                var invoiceDetails = "Order details summary..."; 


                await _emailService.SendInvoiceEmailAsync(recipientEmails, invoiceNumber, totalPrice, invoiceDate, invoiceDetails, orderDto.OrderDetails.CartItemIds);

                return Ok(new { message = "Order placed successfully.", orderId = order.OrdersId });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error processing order.");
                return StatusCode(500, new { message = "Internal server error", detail = ex.Message });
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

   

                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch (DbUpdateConcurrencyException)
            {
                return NotFound();
            }
        }
        [HttpGet("total-earnings")]
        public async Task<ActionResult<decimal>> GetTotalEarnings()
        {
            var totalEarnings = await _context.Payment
                .SumAsync(p => p.Amount);

            return Ok(totalEarnings);
        }

        [HttpGet("orders-summary")]
        public async Task<ActionResult> GetOrdersSummary()
        {
            try
            {
                var bookOrdersCount = await _context.OrderDetails
                    .Include(od => od.CartItems)
                    .Where(od => od.CartItemIds != null && od.CartItemIds.Any())
                    .SelectMany(od => od.CartItems)
                    .CountAsync(ci => ci.BookId != null);

                var accessoriesOrdersCount = await _context.OrderDetails
                    .Include(od => od.CartItems)
                    .Where(od => od.CartItemIds != null && od.CartItemIds.Any())
                    .SelectMany(od => od.CartItems)
                    .CountAsync(ci => ci.AccessoriesID != null);

                var ebookLoansCount = await _context.EbookLoans.CountAsync();

                var summary = new
                {
                    bookOrders = bookOrdersCount,
                    accessoriesOrders = accessoriesOrdersCount,
                    ebookLoans = ebookLoansCount
                };

                return Ok(summary);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    message = "An error occurred while retrieving the orders summary.",
                    detail = ex.InnerException?.Message ?? ex.Message
                });
            }
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
