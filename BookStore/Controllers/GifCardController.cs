using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookStore.Models;
using Microsoft.Extensions.Logging;
using BookStore.DTOs;
using BookStore.Services;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GiftCardController : ControllerBase
    {
        private readonly MyContext _context;
        private readonly ILogger<GiftCardController> _logger;
        private readonly EmailService _emailService;

        public GiftCardController(MyContext context, ILogger<GiftCardController> logger, EmailService emailService)
        {
            _context = context;
            _logger = logger;
            _emailService = emailService;

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

            if (giftCard.UserID <= 0) 
            {
                _logger.LogWarning("UserID is required and must be greater than zero.");
                return BadRequest(new { error = "UserID is required and must be greater than zero." });
            }

            if (!ModelState.IsValid)
            {
                _logger.LogWarning("Invalid model state for gift card: {ModelState}", ModelState);
                return BadRequest(ModelState);
            }

            try
            {
                string generatedCode;
                do
                {
                    generatedCode = GenerateGiftCardCode();
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
    
        // POST: api/GiftCard/apply
        [HttpPost("apply")]
        public async Task<ActionResult<GiftCardResponseDto>> ApplyGiftCard([FromBody] GiftCardApplicationDto application)
        {
            if (string.IsNullOrWhiteSpace(application.GiftCardCode) || application.UsedAmount <= 0)
            {
                return BadRequest("Gift card code is required and a valid amount must be specified.");
            }

            try
            {
                var giftCard = await _context.GiftCards
                    .FirstOrDefaultAsync(g => g.Code == application.GiftCardCode && g.IsActive);

                if (giftCard == null)
                {
                    return NotFound("Gift card not found or inactive.");
                }

                if (application.UsedAmount > giftCard.Amount)
                {
                    return BadRequest("Used amount exceeds the available gift card balance.");
                }

                giftCard.Amount -= application.UsedAmount;

                if (giftCard.Amount <= 0)
                {
                    giftCard.IsActive = false;
                }

                _context.GiftCards.Update(giftCard);
                await _context.SaveChangesAsync();

                var response = new GiftCardResponseDto
                {
                    RemainingAmount = giftCard.Amount,
                    GiftCardId = giftCard.GiftCardID
                };

                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error applying gift card with code {GiftCardCode}", application.GiftCardCode);
                return StatusCode(500, "Internal server error");
            }
        }
        public class GiftCardResponseDto
        {
            public decimal RemainingAmount { get; set; }
            public int GiftCardId { get; set; }
        }


        [HttpGet("balance/{code}")]
        public async Task<ActionResult<GiftCardBalanceDto>> GetGiftCardBalance(string code)
        {
            var giftCard = await _context.GiftCards
                .FirstOrDefaultAsync(g => g.Code == code && g.IsActive);

            if (giftCard == null)
            {
                return NotFound("Gift card not found or inactive.");
            }

            var response = new GiftCardBalanceDto
            {
                Amount = giftCard.Amount,
                GiftCardId = giftCard.GiftCardID
            };

            return Ok(response);
        }
        public class GiftCardBalanceDto
        {
            public decimal Amount { get; set; }
            public int GiftCardId { get; set; }
        }



        private string GenerateGiftCardCode()
        {
           
            return Guid.NewGuid().ToString().Substring(0, 8).ToUpper();
        }

        // PUT: api/GiftCard/5
        [HttpPut("{GiftCardID}")]
        public async Task<IActionResult> PutGiftCard(int GiftCardID, [FromBody] GiftCard giftCard)
        {
            if (GiftCardID != giftCard.GiftCardID)
            {
                _logger.LogWarning("GiftCardID mismatch: {GiftCardID} vs {ProvidedID}", GiftCardID, giftCard.GiftCardID);
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
        [HttpPost("revert")]
        public async Task<IActionResult> RevertGiftCardAmount([FromBody] GiftCardRevertDto revertDto)
        {
            if (string.IsNullOrWhiteSpace(revertDto.GiftCardCode) || revertDto.RevertedAmount <= 0)
            {
                return BadRequest("Gift card code is required and a valid amount must be specified.");
            }

            try
            {
                var giftCard = await _context.GiftCards
                    .FirstOrDefaultAsync(g => g.Code == revertDto.GiftCardCode && !g.IsActive);

                if (giftCard == null)
                {
                    return NotFound("Gift card not found or already active.");
                }

               
                giftCard.Amount += revertDto.RevertedAmount;
                giftCard.IsActive = true;

                _context.GiftCards.Update(giftCard);
                await _context.SaveChangesAsync();

                return Ok(giftCard.Amount);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error reverting gift card amount for code {GiftCardCode}", revertDto.GiftCardCode);
                return StatusCode(500, "Internal server error");
            }
        }
        public class GiftCardRevertDto
        {
            public string GiftCardCode { get; set; }
            public decimal RevertedAmount { get; set; }
        }


        [HttpGet("counts")]
        public async Task<ActionResult<object>> GetGiftCardCounts()
        {
            try
            {
                var activeCount = await _context.GiftCards.CountAsync(g => g.IsActive);
                var inactiveCount = await _context.GiftCards.CountAsync(g => !g.IsActive);

                return Ok(new
                {
                    ActiveGiftCardCount = activeCount,
                    InactiveGiftCardCount = inactiveCount
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving gift card counts");
                return StatusCode(500, "Internal server error");
            }
        }

        private bool GiftCardExists(int id)
        {
            return _context.GiftCards.Any(e => e.GiftCardID == id);
        }
    }
}
