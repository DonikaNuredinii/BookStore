using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookStore.Models;
using Microsoft.Extensions.Logging;
using System;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GiftCardController : ControllerBase
    {
        private readonly MyContext _context;
        private readonly ILogger<GiftCardController> _logger;

        public GiftCardController(MyContext context, ILogger<GiftCardController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/GiftCard
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GiftCard>>> GetGiftCards()
        {
            try
            {
                return await _context.GiftCards.ToListAsync();
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
                return giftCard;
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
            try
            {
                if (!ModelState.IsValid)
                {
                    _logger.LogWarning("Invalid model state for gift card: {ModelState}", ModelState);
                    return BadRequest(ModelState);
                }

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

            return NoContent();
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
