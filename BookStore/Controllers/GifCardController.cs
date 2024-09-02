using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookStore.Models;
using Microsoft.Extensions.Logging;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GiftCardController : ControllerBase
    {
        private readonly MyContext _context;
        private readonly ILogger<GiftCardController> _logger;
        private readonly GiftCardService _giftCardService;

        public GiftCardController(MyContext context, ILogger<GiftCardController> logger, GiftCardService giftCardService)
        {
            _context = context;
            _logger = logger;
            _giftCardService = giftCardService;
        }

        // GET: api/GiftCard
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GiftCard>>> GetGiftCards()
        {
            try
            {
                var giftCards = await _context.GiftCards.ToListAsync();
                return Ok(giftCards);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving gift cards");
                return StatusCode(500, "Internal server error");
            }
        }

        // GET: api/GiftCard/5
        [HttpGet("{GiftCardID}")]
        public async Task<ActionResult<GiftCard>> GetGiftCard(int GiftCardID)
        {
            try
            {
                var giftCard = await _context.GiftCards.FindAsync(GiftCardID);
                if (giftCard == null)
                {
                    return NotFound();
                }
                return Ok(giftCard);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving gift card with ID {GiftCardID}", GiftCardID);
                return StatusCode(500, "Internal server error");
            }
        }

        // POST: api/GiftCard
        [HttpPost]
        public async Task<ActionResult<GiftCard>> PostGiftCard(GiftCard giftCard)
        {
            if (!ModelState.IsValid)
            {
                _logger.LogWarning("Invalid model state for gift card: {ModelState}", ModelState);
                return BadRequest(ModelState);
            }

            try
            {
                // Generate a new gift card code and ensure it's unique
                string generatedCode;
                do
                {
                    generatedCode = _giftCardService.GenerateGiftCardCode();
                } while (await _context.GiftCards.AnyAsync(g => g.Code == generatedCode));

                giftCard.Code = generatedCode;

                _context.GiftCards.Add(giftCard);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetGiftCard), new { GiftCardID = giftCard.GiftCardID }, giftCard);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating gift card");
                return StatusCode(500, "Internal server error");
            }
        }

        // PUT: api/GiftCard/5
        [HttpPut("{GiftCardID}")]
        public async Task<IActionResult> PutGiftCard(int GiftCardID, [FromBody] GiftCard giftCard)
        {
            if (GiftCardID != giftCard.GiftCardID)
            {
                _logger.LogWarning("GiftCardID mismatch: {GiftCardID}", GiftCardID);
                return BadRequest("GiftCardID mismatch");
            }

            try
            {
                var existingGiftCard = await _context.GiftCards.FindAsync(GiftCardID);
                if (existingGiftCard == null)
                {
                    return NotFound();
                }

                existingGiftCard.Code = giftCard.Code;
                existingGiftCard.Amount = giftCard.Amount;
                existingGiftCard.RecipientName = giftCard.RecipientName;
                existingGiftCard.IsActive = giftCard.IsActive;

                _context.Entry(existingGiftCard).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                if (!GiftCardExists(GiftCardID))
                {
                    _logger.LogWarning("Gift card with ID {GiftCardID} not found", GiftCardID);
                    return NotFound();
                }
                _logger.LogError(ex, "Error updating gift card with ID {GiftCardID}", GiftCardID);
                return StatusCode(500, "Internal server error");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating gift card with ID {GiftCardID}", GiftCardID);
                return StatusCode(500, "Internal server error");
            }
        }

        // DELETE: api/GiftCard/5
        [HttpDelete("{GiftCardID}")]
        public async Task<IActionResult> DeleteGiftCard(int GiftCardID)
        {
            try
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
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error deleting gift card with ID {GiftCardID}", GiftCardID);
                return StatusCode(500, "Internal server error");
            }
        }

        private bool GiftCardExists(int GiftCardID)
        {
            return _context.GiftCards.Any(e => e.GiftCardID == GiftCardID);
        }
    }
}
