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
    public class AuthorController : ControllerBase
    {
        private readonly MyContext _context;

        public AuthorController(MyContext context)
        {
            _context = context;
        }

        // GET: api/Author
        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetAuthors()
        {
            var authors = await _context.Author
                .Include(a => a.BookAuthors)
                .ThenInclude(ba => ba.Book)
                .ToListAsync();

            if (authors == null || !authors.Any())
            {
                return NotFound();
            }

            var result = authors.Select(a => new
            {
                a.AuthorID,
                a.Name,
                a.DateOfBirth,
                a.Biography,
                a.Awards,
                a.Genre,
                Books = a.BookAuthors.Select(ba => new
                {
                    ba.Book.BookID,
                    ba.Book.Title
                })
            });

            return Ok(result);
        }

        // GET: api/Author/{authorID}
        [HttpGet("{authorID}")]
        public async Task<ActionResult<object>> GetAuthor(int authorID)
        {
            var author = await _context.Author
                .Include(a => a.BookAuthors)
                .ThenInclude(ba => ba.Book)
                .FirstOrDefaultAsync(a => a.AuthorID == authorID);

            if (author == null)
            {
                return NotFound();
            }

            var result = new
            {
                author.AuthorID,
                author.Name,
                author.DateOfBirth,
                author.Biography,
                author.Awards,
                author.Genre,
                Books = author.BookAuthors.Select(ba => new
                {
                    ba.Book.BookID,
                    ba.Book.Title
                })
            };

            return Ok(result);
        }

        // POST: api/Author
        [HttpPost]
        public async Task<ActionResult<Author>> PostAuthor(Author author)
        {
            if (author == null)
            {
                return BadRequest("Author cannot be null.");
            }

            _context.Author.Add(author);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAuthor), new { authorID = author.AuthorID }, author);
        }

        // PUT: api/Author/{authorID}
        [HttpPut("{authorID}")]
        public async Task<IActionResult> PutAuthor(int authorID, Author author)
        {
            if (authorID != author.AuthorID)
            {
                return BadRequest();
            }

            _context.Entry(author).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AuthorExists(authorID))
                {
                    return NotFound();
                }
                else
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, "Concurrency error occurred.");
                }
            }

            return NoContent();
        }

        // DELETE: api/Author/{authorID}
        [HttpDelete("{authorID}")]
        public async Task<IActionResult> DeleteAuthor(int authorID)
        {
            var author = await _context.Author.FindAsync(authorID);
            if (author == null)
            {
                return NotFound();
            }

            _context.Author.Remove(author);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AuthorExists(int authorID)
        {
            return _context.Author.Any(e => e.AuthorID == authorID);
        }
    }
}
