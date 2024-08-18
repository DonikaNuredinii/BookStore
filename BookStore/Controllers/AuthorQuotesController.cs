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
                    AuthorName = aq.Author.Name,
                    QuoteText = aq.Quote.Text
                })
                .ToListAsync();

            return Ok(authorQuotes);
        }


        // GET: api/AuthorQuotes/5
        [HttpGet("{authorId}/{quoteId}")]
        public async Task<ActionResult<object>> GetAuthorQuote(int authorId, int quoteId)
        {
            var authorQuote = await _context.AuthorQuotes
                .Include(aq => aq.Author)
                .Include(aq => aq.Quote)
                .Where(aq => aq.AuthorID == authorId && aq.QuoteID == quoteId)
                .Select(aq => new
                {
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

        // POST: api/AuthorQuotes
        [HttpPost]
        public async Task<ActionResult<AuthorQuotes>> PostAuthorQuote(AuthorQuotes authorQuote)
        {
            _context.AuthorQuotes.Add(authorQuote);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAuthorQuote), new { authorId = authorQuote.AuthorID, quoteId = authorQuote.QuoteID }, authorQuote);
        }

        // PUT: api/AuthorQuotes/5
        [HttpPut("{authorId}/{quoteId}")]
        public async Task<IActionResult> PutAuthorQuote(int authorId, int quoteId, AuthorQuotes authorQuote)
        {
            if (authorId != authorQuote.AuthorID || quoteId != authorQuote.QuoteID)
            {
                return BadRequest();
            }

            _context.Entry(authorQuote).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AuthorQuoteExists(authorId, quoteId))
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

        // DELETE: api/AuthorQuotes/5
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

        private bool AuthorQuoteExists(int authorId, int quoteId)
        {
            return _context.AuthorQuotes.Any(aq => aq.AuthorID == authorId && aq.QuoteID == quoteId);
        }
    }
}
    