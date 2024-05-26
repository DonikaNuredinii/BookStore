using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookStore.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GiftCardController : ControllerBase
    {
        private readonly MyContext _context;

        public GiftCardController(MyContext context)
        {
            _context = context;
        }

        // GET: api/GiftCard
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GiftCard>>> GetGiftCards()
        {
            return await _context.GiftCards.ToListAsync();
        }

        // GET: api/GiftCard/5
        [HttpGet("{GiftCardID}")]
        public async Task<ActionResult<GiftCard>> GetGiftCard(int GiftCardID)
        {
            var giftCard = await _context.GiftCards.FindAsync(GiftCardID);

            if (giftCard == null)
            {
                return NotFound();
            }

            return giftCard;
        }

        // POST: api/GiftCard
        [HttpPost]
        public async Task<ActionResult<GiftCard>> PostGiftCard(GiftCard giftCard)
        {
            _context.GiftCards.Add(giftCard);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetGiftCard), new { GiftCardID = giftCard.GiftCardID }, giftCard);
        }

        // PUT: api/GiftCard/5
        [HttpPut("{GiftCardID}")]
        public async Task<IActionResult> PutGiftCard(int GiftCardID, GiftCard giftCard)
        {
            if (GiftCardID != giftCard.GiftCardID)
            {
                return BadRequest();
            }

            _context.Entry(giftCard).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GiftCardExists(GiftCardID))
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

        // DELETE: api/GiftCard/5
        [HttpDelete("{GiftCardID}")]
        public async Task<IActionResult> DeleteGiftCard(int GiftCardID)
        {
            var giftCard = await _context.GiftCards.FindAsync(GiftCardID);
            if (giftCard == null)
            {
                return NotFound();
            }

            _context.GiftCards.Remove(giftCard);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GiftCardExists(int GiftCardID)
        {
            return _context.GiftCards.Any(e => e.GiftCardID == GiftCardID);
        }
    }
}
