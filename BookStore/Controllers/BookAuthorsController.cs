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
    public class BookAuthorsController : ControllerBase
    {
        private readonly MyContext _context;

        public BookAuthorsController(MyContext context)
        {
            _context = context;
        }

        // GET: api/BookAuthors
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BookAuthors>>> GetBookAuthors()
        {
            return await _context.BookAuthors.ToListAsync();
        }

        // GET: api/BookAuthors/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BookAuthors>> GetBookAuthors(int id)
        {
            var bookAuthors = await _context.BookAuthors.FindAsync(id);

            if (bookAuthors == null)
            {
                return NotFound();
            }

            return bookAuthors;
        }

        // POST: api/BookAuthors
        [HttpPost]
        public async Task<ActionResult<BookAuthors>> PostBookAuthors(BookAuthors bookAuthors)
        {
            _context.BookAuthors.Add(bookAuthors);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetBookAuthors), new { id = bookAuthors.BookAuthorsID }, bookAuthors);
        }

        // DELETE: api/BookAuthors/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBookAuthors(int id)
        {
            var bookAuthors = await _context.BookAuthors.FindAsync(id);
            if (bookAuthors == null)
            {
                return NotFound();
            }

            _context.BookAuthors.Remove(bookAuthors);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBookAuthors(int id, BookAuthors bookAuthors)
        {
            if (id != bookAuthors.BookAuthorsID)
            {
                return BadRequest();
            }

            _context.Entry(bookAuthors).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookAuthorsExists(id))
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


    private bool BookAuthorsExists(int id)
        {
            return _context.BookAuthors.Any(e => e.BookAuthorsID == id);
        }
    }
}
