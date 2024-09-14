using BookStore.DTOs;
using BookStore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Stripe;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentsController : ControllerBase
    {
        private readonly MyContext _context;

        public PaymentsController(MyContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Payment>>> GetPayments()
        {
            return await _context.Payment.ToListAsync();
        }

        [HttpGet("{PaymentID}")]
        public async Task<ActionResult<Payment>> GetPayment(int PaymentID)
        {
            var payment = await _context.Payment.FindAsync(PaymentID);
            if (payment == null)
            {
                return NotFound();
            }

            return payment;
        }

        [HttpPost]
        public async Task<ActionResult<Payment>> CreateOrderAndProcessPayment([FromBody] CreatePaymentRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    var order = new Orders
                    {
                        OrderDate = DateTime.Now,
                        Address = request.Address,
                        City = request.City,
                        CountryID = request.CountryID,
                        ZipCode = request.ZipCode,
                        DiscountID = request.DiscountID,
                        GiftCardID = request.GiftCardID,
                        OrderDetails = new List<OrderDetails>()
                    };

                    decimal totalOrderPrice = 0m;

                    foreach (var cartItemDto in request.CartItems)
                    {
                        decimal itemPrice = 0m;

                        if (cartItemDto.BookId.HasValue)
                        {
                            var book = await _context.Books.FindAsync(cartItemDto.BookId.Value);
                            if (book == null)
                            {
                                return NotFound($"Book with ID {cartItemDto.BookId.Value} not found.");
                            }
                            itemPrice = book.Price;
                        }
                        else if (cartItemDto.AccessoriesID.HasValue)
                        {
                            var accessory = await _context.Accessories.FindAsync(cartItemDto.AccessoriesID.Value);
                            if (accessory == null)
                            {
                                return NotFound($"Accessory with ID {cartItemDto.AccessoriesID.Value} not found.");
                            }
                            itemPrice = accessory.Price;
                        }
                        else if (cartItemDto.GiftCardId.HasValue)
                        {
                            var giftCard = await _context.GiftCards.FindAsync(cartItemDto.GiftCardId.Value);
                            if (giftCard == null)
                            {
                                return NotFound($"GiftCard with ID {cartItemDto.GiftCardId.Value} not found.");
                            }
                            itemPrice = giftCard.Amount;
                        }

                        decimal itemTotalPrice = itemPrice * cartItemDto.Quantity;
                        totalOrderPrice += itemTotalPrice;

                        var orderDetail = new OrderDetails
                        {
                            TotalPrice = itemTotalPrice,
                            InvoiceDate = DateTime.Now,
                            CartItem = new CartItem
                            {
                                BookId = cartItemDto.BookId,
                                AccessoriesID = cartItemDto.AccessoriesID,
                                GiftCardId = cartItemDto.GiftCardId,
                                Quantity = cartItemDto.Quantity
                            }
                        };

                        order.OrderDetails.Add(orderDetail);
                    }

                    _context.Orders.Add(order);
                    await _context.SaveChangesAsync();

                    if (request.PaymentMethod == "cashOnDelivery")
                    {
                        var payment = new Payment
                        {
                            Amount = totalOrderPrice,
                            PaymentMethod = "cashOnDelivery",
                            OrdersId = order.OrdersId,
                            LastFourDigits = null
                        };

                        _context.Payment.Add(payment);
                        await _context.SaveChangesAsync();
                    }
                    else
                    {
                        var options = new PaymentIntentCreateOptions
                        {
                            Amount = (long)(totalOrderPrice * 100),
                            Currency = "eur",
                            PaymentMethod = request.PaymentMethodId,
                            Confirm = true,
                            Metadata = new Dictionary<string, string>
                            {
                                { "OrderId", order.OrdersId.ToString() }
                            }
                        };

                        var service = new PaymentIntentService();
                        var paymentIntent = service.Create(options);

                        var payment = new Payment
                        {
                            Amount = totalOrderPrice,
                            PaymentMethod = request.PaymentMethod,
                            LastFourDigits = request.LastFourDigits,
                            TransactionID = paymentIntent.Id,
                            OrdersId = order.OrdersId
                        };

                        _context.Payment.Add(payment);
                        await _context.SaveChangesAsync();
                    }

                    await transaction.CommitAsync();

                    return CreatedAtAction(nameof(GetPayment), new { PaymentID = order.OrdersId }, order);
                }
                catch (StripeException e)
                {
                    await transaction.RollbackAsync();
                    return BadRequest(new { Error = e.StripeError.Message });
                }
                catch (System.Exception)
                {
                    await transaction.RollbackAsync();
                    return StatusCode(500, "An error occurred while processing the payment or creating the order.");
                }
            }
        }

        [HttpPut("{PaymentID}")]
        public async Task<IActionResult> PutPayment(int PaymentID, Payment payment)
        {
            if (PaymentID != payment.PaymentID)
            {
                return BadRequest();
            }

            _context.Entry(payment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaymentExists(PaymentID))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{PaymentID}")]
        public async Task<IActionResult> DeletePayment(int PaymentID)
        {
            var payment = await _context.Payment.FindAsync(PaymentID);
            if (payment == null)
            {
                return NotFound();
            }

            _context.Payment.Remove(payment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PaymentExists(int PaymentID)
        {
            return _context.Payment.Any(e => e.PaymentID == PaymentID);
        }
    }
}
