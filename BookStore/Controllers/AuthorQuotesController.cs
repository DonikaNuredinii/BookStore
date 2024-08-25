using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookStore.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorQuotesController : ControllerBase
    {
        private readonly MyContext _context;

        public AuthorQuotesController(MyContext context)
        {
            _context = context;
        }

        // GET: api/AuthorQuotes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetAuthorQuotes()
        {
            var authorQuotes = await _context.AuthorQuotes
                .Include(aq => aq.Author)
                .Include(aq => aq.Quote)
                .Select(aq => new
                {
                    AuthorID = aq.AuthorID,
                    QuoteID = aq.QuoteID,
                    AuthorName = aq.Author.Name,
                    QuoteText = aq.Quote.Text
                })
                .ToListAsync();

            return Ok(authorQuotes);
        }

        // GET: api/AuthorQuotes/{authorId}/{quoteId}
        [HttpGet("{authorId}/{quoteId}")]
        public async Task<ActionResult<object>> GetAuthorQuote(int authorId, int quoteId)
        {
            var authorQuote = await _context.AuthorQuotes
                .Include(aq => aq.Author)
                .Include(aq => aq.Quote)
                .Where(aq => aq.AuthorID == authorId && aq.QuoteID == quoteId)
                .Select(aq => new
                {
                    AuthorID = aq.AuthorID,
                    QuoteID = aq.QuoteID,
                    AuthorName = aq.Author.Name,
                    QuoteText = aq.Quote.Text
                })
                .FirstOrDefaultAsync();

            if (authorQuote == null)
            {
                return NotFound();
            }

            return Ok(authorQuote);
        }

        // POST: api/AuthorQuotes/AddAuthorToQuote
        [HttpPost]
        public async Task<IActionResult> PostAuthorQuote([FromBody] AuthorQuoteRequest request)
        {
            if (request == null || request.AuthorID <= 0 || request.QuoteID <= 0)
            {
                return BadRequest("Invalid AuthorID or QuoteID.");
            }

            // Check if the Author and Quote exist
            var authorExists = await _context.Author.AnyAsync(a => a.AuthorID == request.AuthorID);
            var quoteExists = await _context.Quotes.AnyAsync(q => q.QuoteID == request.QuoteID);

            if (!authorExists)
            {
                return BadRequest("Author not found.");
            }

            if (!quoteExists)
            {
                return BadRequest("Quote not found.");
            }

            // Check if the relationship already exists
            var existingAuthorQuote = await _context.AuthorQuotes
                .FirstOrDefaultAsync(aq => aq.AuthorID == request.AuthorID && aq.QuoteID == request.QuoteID);

            if (existingAuthorQuote != null)
            {
                return Conflict("This author-quote relationship already exists.");
            }

            // Add the new relationship
            var authorQuote = new AuthorQuotes
            {
                AuthorID = request.AuthorID,
                QuoteID = request.QuoteID
            };

            _context.AuthorQuotes.Add(authorQuote);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAuthorQuote), new { authorId = request.AuthorID, quoteId = request.QuoteID }, authorQuote);
        }

        [HttpPut("{quoteId}")]
        public async Task<IActionResult> PutAuthorQuote(int quoteId, [FromBody] AuthorQuoteUpdateRequest request)
        {
            if (request == null || request.AuthorId <= 0)
            {
                return BadRequest("Invalid AuthorID.");
            }

            // Find the existing AuthorQuotes entry for the given QuoteID
            var existingAuthorQuote = await _context.AuthorQuotes
                .FirstOrDefaultAsync(aq => aq.QuoteID == quoteId);

            if (existingAuthorQuote == null)
            {
                return NotFound(new { message = "Author-Quote relationship not found." });
            }

            // Remove the existing entry
            _context.AuthorQuotes.Remove(existingAuthorQuote);
            await _context.SaveChangesAsync(); // Save changes to remove the old relationship

            // Check if the new author exists
            var authorExists = await _context.Author.AnyAsync(a => a.AuthorID == request.AuthorId);
            if (!authorExists)
            {
                return BadRequest("New Author not found.");
            }

            // Create a new entry with the updated AuthorID
            var newAuthorQuote = new AuthorQuotes
            {
                AuthorID = request.AuthorId,
                QuoteID = quoteId
            };

            _context.AuthorQuotes.Add(newAuthorQuote);

            try
            {
                await _context.SaveChangesAsync(); // Save changes to add the new relationship
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while updating the author-quote relationship.", details = ex.Message });
            }

            return NoContent();
        }


        // DELETE: api/AuthorQuotes/{authorId}/{quoteId}
        [HttpDelete("{authorId}/{quoteId}")]
        public async Task<IActionResult> DeleteAuthorQuote(int authorId, int quoteId)
        {
            var authorQuote = await _context.AuthorQuotes
                .FirstOrDefaultAsync(aq => aq.AuthorID == authorId && aq.QuoteID == quoteId);

            if (authorQuote == null)
            {
                return NotFound();
            }

            _context.AuthorQuotes.Remove(authorQuote);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("Quote/{quoteId}")]
        public async Task<ActionResult<IEnumerable<object>>> GetAuthorsByQuoteId(int quoteId)
        {
            var authors = await _context.AuthorQuotes
                .Include(aq => aq.Author)
                .Where(aq => aq.QuoteID == quoteId)
                .Select(aq => new
                {
                    AuthorID = aq.Author.AuthorID,
                    QuoteID = aq.QuoteID,
                    AuthorName = aq.Author.Name,
                })
                .ToListAsync();

            if (!authors.Any())
            {
                return Ok(new List<object>());
            }

            return Ok(authors);
        }

        private bool AuthorQuoteExists(int id)
        {
            return _context.AuthorQuotes.Any(e => e.QuoteID == id);
        }
    }
}
