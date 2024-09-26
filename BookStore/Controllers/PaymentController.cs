using BookStore.DTOs;
using BookStore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Stripe;
using System;
using System.Collections.Generic;
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

        [HttpPost]
        public async Task<ActionResult> ProcessPayment([FromBody] CreatePaymentRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            using var transaction = await _context.Database.BeginTransactionAsync();
            try
            {
                var order = await _context.Orders.FindAsync(request.OrdersID);
                if (order == null)
                {
                    return NotFound("Order not found");
                }

                if (request.PaymentMethod == "creditCard")
                {
                    var options = new PaymentIntentCreateOptions
                    {
                        Amount = (long)(request.Amount * 100), 
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
                        Amount = request.Amount,
                        PaymentMethod = request.PaymentMethod,
                        TransactionID = paymentIntent.Id,
                        OrdersId = order.OrdersId
                    };

                    _context.Payment.Add(payment);
                    await _context.SaveChangesAsync();
                }

                await transaction.CommitAsync();
                return Ok(new { message = "Payment processed successfully" });
            }
            catch (StripeException ex)
            {
                await transaction.RollbackAsync();
                return BadRequest(new { error = ex.StripeError.Message });
            }
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
    }
}
