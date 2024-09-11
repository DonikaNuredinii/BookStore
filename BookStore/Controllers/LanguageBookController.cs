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
    public class LanguageBookController : ControllerBase
    {
        private readonly MyContext _context;

        public LanguageBookController(MyContext context)
        {
            _context = context;
        }

        // GET: api/LanguageBook
        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetLanguageBooks()
        {
            var languageBooks = await _context.LanguageBooks
                .Include(lb => lb.Book)
                .Include(lb => lb.Language)
                .Select(lb => new
                {
                    lb.LanguageBookID,
                    lb.BookID,
                    lb.LanguageID,
                    Book = new
                    {
                        lb.Book.BookID,
                        lb.Book.Title,
                        lb.Book.ISBN,
                        lb.Book.Image,
                        lb.Book.Description
                    },
                    Language = new
                    {
                        lb.Language.LanguageId,
                        lb.Language.LanguageName
                    }
                })
                .ToListAsync();

            return Ok(languageBooks);
        }

        // GET: api/LanguageBook/5
        [HttpGet("{id}")]
        public async Task<ActionResult<object>> GetLanguageBook(int id)
        {
            var languageBook = await _context.LanguageBooks
                .Include(lb => lb.Book)
                .Include(lb => lb.Language)
                .Where(lb => lb.LanguageBookID == id)
                .Select(lb => new
                {
                    lb.LanguageBookID,
                    lb.BookID,
                    lb.LanguageID,
                    Book = new
                    {
                        lb.Book.BookID,
                        lb.Book.Title,
                        lb.Book.ISBN,
                        lb.Book.Image,
                        lb.Book.Description
                    },
                    Language = new
                    {
                        lb.Language.LanguageId,
                        lb.Language.LanguageName
                    }
                })
                .FirstOrDefaultAsync();

            if (languageBook == null)
            {
                return NotFound();
            }

            return Ok(languageBook);
        }

        // GET: api/LanguageBook/Book/5
        [HttpGet("Book/{bookID}")]
        public async Task<ActionResult<IEnumerable<object>>> GetLanguageBooksByBookID(int bookID)
        {
            var languageBooks = await _context.LanguageBooks
                .Where(lb => lb.BookID == bookID)
                .Include(lb => lb.Language)
                .Select(lb => new
                {
                    lb.LanguageBookID,
                    lb.BookID,
                    lb.LanguageID,
                    Language = new
                    {
                        lb.Language.LanguageId,
                        lb.Language.LanguageName
                    }
                })
                .ToListAsync();

            if (languageBooks == null || !languageBooks.Any())
            {
                return NotFound();
            }

            return Ok(languageBooks);
        }

        // POST: api/LanguageBook
        [HttpPost]
        public async Task<ActionResult<LanguageBook>> PostLanguageBook(LanguageBook languageBook)
        {
            _context.LanguageBooks.Add(languageBook);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetLanguageBook), new { id = languageBook.LanguageBookID }, languageBook);
        }

        // PUT: api/LanguageBook/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLanguageBook(int id, LanguageBook languageBook)
        {
            if (id != languageBook.LanguageBookID)
            {
                return BadRequest();
            }

            _context.Entry(languageBook).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LanguageBookExists(id))
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

        // DELETE: api/LanguageBook/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLanguageBook(int id)
        {
            var languageBook = await _context.LanguageBooks.FindAsync(id);
            if (languageBook == null)
            {
                return NotFound();
            }

            _context.LanguageBooks.Remove(languageBook);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LanguageBookExists(int id)
        {
            return _context.LanguageBooks.Any(e => e.LanguageBookID == id);
        }
    }
}
