using BookStore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiscountsController : ControllerBase
    {
        private readonly MyContext _context;

        public DiscountsController(MyContext context)
        {
            _context = context;
        }

        // GET: api/Discounts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Discount>>> GetDiscounts()
        {
            return await _context.Discount.ToListAsync();
        }

        // GET: api/Discounts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Discount>> GetDiscount(int id)
        {
            var discount = await _context.Discount.FindAsync(id);

            if (discount == null)
            {
                return NotFound();
            }

            return discount;
        }

        // POST: api/Discounts
        [HttpPost]
        public async Task<ActionResult<Discount>> PostDiscount(Discount discount)
        {
            _context.Discount.Add(discount);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetDiscount), new { id = discount.DiscountID }, discount);
        }

        // DELETE: api/Discounts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDiscount(int id)
        {
            var discount = await _context.Discount.FindAsync(id);
            if (discount == null)
            {
                return NotFound();
            }

            _context.Discount.Remove(discount);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // PUT: api/Discounts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDiscount(int id, Discount discount)
        {
            if (id != discount.DiscountID)
            {
                return BadRequest();
            }

            _context.Entry(discount).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DiscountExists(id))
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

        private bool DiscountExists(int id)
        {
            return _context.Discount.Any(e => e.DiscountID == id);
        }
    }
}
