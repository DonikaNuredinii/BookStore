using BookStore.DTOs;
using BookStore.Models;
using BookStore.Services;
using Microsoft.AspNetCore.Authorization;
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
        public IActionResult GetOrders()
        {
            var orders = _context.Orders
                .Include(o => o.OrderDetails)
                    .ThenInclude(od => od.CartItems)
                .Include(o => o.UserOrders)
                    .ThenInclude(uo => uo.User)
                .Include(o => o.Country)
                .ToList();

            var orderDtoList = orders.Select(order => new
            {
                OrdersId = order.OrdersId,
                OrderDate = order.OrderDate,
                Address = order.Address,
                City = order.City,
                CountryID = order.CountryID,
                CountryName = order.Country.CountryName,
                ZipCode = order.ZipCode,
                Email = order.Email,
                DiscountID = order.DiscountID,
                GiftCardID = order.GiftCardID,
                UserID = order.UserOrders.FirstOrDefault()?.UserId,
                UserFirstName = order.UserOrders.FirstOrDefault()?.User.FirstName,
                TotalPrice = order.OrderDetails?.TotalPrice ?? 0,
                InvoiceDate = order.OrderDetails?.InvoiceDate ?? DateTime.MinValue,
                OrderShipDate = order.OrderDetails?.OrderShipDate ?? DateTime.MinValue,
                InvoiceNumber = order.OrderDetails?.InvoiceNumber ?? string.Empty,
                CartItemsIds = order.OrderDetails?.CartItemIds,
            }).ToList();

            return Ok(orderDtoList);
        }


        [HttpGet("{orderId}")]
        public async Task<IActionResult> GetOrder(int orderId)
        {
            try
            {
                var order = await _context.Orders
                    .Include(o => o.OrderDetails) // Include related OrderDetails
                        .ThenInclude(od => od.CartItems) // Include related CartItems
                    .FirstOrDefaultAsync(o => o.OrdersId == orderId);

                if (order == null)
                {
                    return NotFound(new { message = "Order not found." });
                }

                var result = new
                {
                    OrdersId = order.OrdersId,
                    OrderDate = order.OrderDate,
                    OrderShipDate = order.OrderShipDate,
                    Address = order.Address,
                    City = order.City,
                    CountryID = order.CountryID,
                    ZipCode = order.ZipCode,
                    Email = order.Email,
                    DiscountID = order.DiscountID,
                    GiftCardID = order.GiftCardID,
                    Payment = new
                    {
                        Amount = order.Payment?.Amount ?? 0,
                        PaymentMethod = order.Payment?.PaymentMethod ?? string.Empty,
                        LastFourDigits = order.Payment?.LastFourDigits ?? string.Empty,
                        TransactionID = order.Payment?.TransactionID ?? string.Empty,
                    },
                    OrderDetails = new
                    {
                        TotalPrice = order.OrderDetails?.TotalPrice ?? 0,
                        InvoiceDate = order.OrderDetails?.InvoiceDate,
                        OrderShipDate = order.OrderShipDate,
                        InvoiceNumber = order.OrderDetails?.InvoiceNumber ?? string.Empty,
                        CartItemIds = order.OrderDetails?.CartItems.Select(ci => ci.CartItemId) ?? Enumerable.Empty<int>(),
                    }
                };

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving order with ID {OrderId}.", orderId);
                return StatusCode(500, new { message = "Internal server error", detail = ex.Message });
            }
        }
        [Authorize]
        [HttpPost]
        public async Task<IActionResult> PostOrder(OrdersDto orderDto)
        {
            if (orderDto == null) return BadRequest("Invalid order data.");

            try
            {
                var user = await _context.Users.FindAsync(orderDto.UserID);
                if (user == null) return BadRequest("User not found.");

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
                    OrderDate = DateTime.UtcNow,
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
                        LastFourDigits = orderDto.Payment.PaymentMethod == "cashOnDelivery" ? null : orderDto.Payment.LastFourDigits,
                        PaymentMethod = orderDto.Payment.PaymentMethod,
                        TransactionID = orderDto.Payment.PaymentMethod == "cashOnDelivery" ? null : orderDto.Payment.TransactionID
                    },
                    OrderDetails = orderDetails,
                    UserID = orderDto.UserID,
                };

                _context.Orders.Add(order);
                await _context.SaveChangesAsync();
                var userOrder = new UserOrder
                {
                    UserId = orderDto.UserID,
                    OrdersId = order.OrdersId
                };

                _context.UserOrders.Add(userOrder); 
                await _context.SaveChangesAsync();

                foreach (var cartItemId in orderDto.OrderDetails.CartItemIds)
                {
                    var ebookId = await GetEbookIdFromCartItem(cartItemId);
                    if (ebookId.HasValue)
                    {
                        var ebookLoan = new EbookLoan
                        {
                            EbookID = ebookId.Value,
                            UserID = orderDto.UserID,
                            LoanStartDate = DateTime.UtcNow,
                            LoanDueDate = DateTime.UtcNow.AddDays(30),
                            IsReturned = false
                        };

                        _context.EbookLoans.Add(ebookLoan);
                    }
                }

                await _context.SaveChangesAsync();

                var ebookLoansCount = await _context.EbookLoans.CountAsync(loan => loan.UserID == orderDto.UserID);
                Console.WriteLine($"EbookLoans count for UserID {orderDto.UserID}: {ebookLoansCount}");

                await _emailService.SendInvoiceEmailAsync(
                    new[] { orderDto.Email },
                    orderDto.OrderDetails.InvoiceNumber,
                    orderDto.OrderDetails.TotalPrice,
                    orderDto.OrderDetails.InvoiceDate,
                    "Order details summary...",
                    orderDto.OrderDetails.CartItemIds
                );

                return Ok(new { message = "Order processed successfully, invoice and gift card emails sent." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Internal server error", detail = ex.Message });
            }
        }


        private async Task<int?> GetEbookIdFromCartItem(int cartItemId)
        {
            var cartItem = await _context.CartItems
                .FirstOrDefaultAsync(ci => ci.CartItemId == cartItemId);

            if (cartItem == null) return null;

            var book = await _context.Books
                .FirstOrDefaultAsync(b => b.BookID == cartItem.BookId && b.Type == "Ebook");

            return book?.BookID;
        }



        [Authorize(Policy = "AdminPolicy")]
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
                var orderDetails = await _context.OrderDetails
                    .Select(od => new
                    {
                        od.CartItemIds,
                        CartItems = _context.CartItems.Where(ci => od.CartItemIds.Contains(ci.CartItemId)).ToList()
                    })
                    .ToListAsync();
                var cartItems = orderDetails.SelectMany(od => od.CartItems).ToList();

                var bookOrdersCount = cartItems.Count(ci => ci.BookId != null);
                var accessoriesOrdersCount = cartItems.Count(ci => ci.AccessoriesID != null);

                var ebookLoansCount = await _context.EbookLoans
                    .CountAsync(el => !el.IsReturned && el.LoanDueDate >= DateTime.UtcNow);

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
                var topCustomers = await _context.Orders
                    .Include(o => o.OrderDetails) 
                    .Include(o => o.UserOrders) 
                        .ThenInclude(uo => uo.User) 
                    .GroupBy(o => new
                    {
                        UserId = o.UserID,
                        UserName = o.UserOrders.FirstOrDefault().User.FirstName + " " + o.UserOrders.FirstOrDefault().User.LastName 
                    })
                    .Select(g => new TopCustomerDto
                    {
                        Id = g.Key.UserId,
                        Name = g.Key.UserName,
                        TotalSpent = g.Sum(o => o.OrderDetails.TotalPrice), 
                        OrderCount = g.Count() 
                    })
                    .OrderByDescending(tc => tc.TotalSpent)
                    .Take(6)
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


        [Authorize(Policy = "AdminPolicy")]
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
