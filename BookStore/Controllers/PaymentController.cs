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

        // GET: api/Payments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Payment>>> GetPayments()
        {
            return await _context.Payment.ToListAsync();
        }

        // GET: api/Payments/5
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

        // POST: api/Payments
        [HttpPost]
        public async Task<ActionResult<Payment>> PostPayment([FromBody] CreatePaymentRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Process the payment using Stripe
            var options = new PaymentIntentCreateOptions
            {
                Amount = (long)(request.Amount * 100), // Convert to cents
                Currency = "eur",
                PaymentMethod = request.PaymentMethodId,
                Confirm = true,
                Metadata = new Dictionary<string, string>
                {
                    { "OrderId", request.OrdersId.ToString() }
                }
            };

            var service = new PaymentIntentService();
            try
            {
                PaymentIntent paymentIntent = service.Create(options);

                // Save the payment to the database
                var payment = new Payment
                {
                    Amount = request.Amount,
                    PaymentMethod = request.PaymentMethod,
                    LastFourDigits = request.LastFourDigits,
                    TransactionID = paymentIntent.Id,
                    OrdersId = request.OrdersId
                };

                _context.Payment.Add(payment);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetPayment), new { PaymentID = payment.PaymentID }, payment);
            }
            catch (StripeException e)
            {
                return BadRequest(new { Error = e.StripeError.Message });
            }
        }

        // DELETE: api/Payments/5
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

        // PUT: api/Payments/5
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

        private bool PaymentExists(int PaymentID)
        {
            return _context.Payment.Any(e => e.PaymentID == PaymentID);
        }
    }
}