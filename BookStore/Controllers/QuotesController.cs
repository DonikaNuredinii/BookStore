using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookStore.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace BookStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuotesController : ControllerBase
    {
        private readonly MyContext _context;

        public QuotesController(MyContext context)
        {
            _context = context;
        }

        // GET: api/Quotes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Quote>>> GetQuotes()
        {
            // Include related authors
            return await _context.Quotes
                .Include(q => q.AuthorQuotes)
                    .ThenInclude(aq => aq.Author)
                .ToListAsync();
        }

        // GET: api/Quotes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Quote>> GetQuote(int id)
        {
            var quote = await _context.Quotes
                .Include(q => q.AuthorQuotes)
                    .ThenInclude(aq => aq.Author)
                .FirstOrDefaultAsync(q => q.QuoteID == id);

            if (quote == null)
            {
                return NotFound();
            }

            return quote;
        }

        // POST: api/Quotes

        [HttpPost]
        public async Task<ActionResult<Quote>> PostQuote([FromBody] Quote quote)
        {
            if (quote == null || string.IsNullOrWhiteSpace(quote.Text))
            {
                return BadRequest("Quote text is required.");
            }

            // Add the quote to the Quotes table
            _context.Quotes.Add(quote);
            await _context.SaveChangesAsync();

            // Return the created quote
            return CreatedAtAction(nameof(GetQuote), new { id = quote.QuoteID }, quote);
        }



        // PUT: api/Quotes/5
        [Authorize(Policy = "AdminPolicy")]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutQuote(int id, Quote quote)
        {
            if (id != quote.QuoteID)
            {
                return BadRequest();
            }

            _context.Entry(quote).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QuoteExists(id))
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
        [Authorize(Policy = "AdminPolicy")]
        // DELETE: api/Quotes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQuote(int id)
        {
            var quote = await _context.Quotes.FindAsync(id);
            if (quote == null)
            {
                return NotFound();
            }

            _context.Quotes.Remove(quote);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool QuoteExists(int id)
        {
            return _context.Quotes.Any(e => e.QuoteID == id);
        }
    }
}
