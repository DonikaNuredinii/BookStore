using BookStore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryBooksController : ControllerBase
    {
        private readonly MyContext _context;

        public CategoryBooksController(MyContext context)
        {
            _context = context;
        }

        // GET: api/CategoryBooks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetCategoryBooks()
        {
            var categoryBooks = await _context.CategoryBooks
                .Include(cb => cb.Book)
                .Include(cb => cb.Category)
                .Select(cb => new
                {
                    cb.CategoryBookID,
                    cb.BookID,
                    cb.CategoryID,
                    Book = new
                    {
                        cb.Book.BookID,
                        cb.Book.Title
                        // Add other properties as needed
                    },
                    Category = new
                    {
                        cb.Category.CategoryId, // Updated property name
                        cb.Category.Genre
                        // Add other properties as needed
                    }
                })
                .ToListAsync();

            return Ok(categoryBooks);
        }

        // GET: api/CategoryBooks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<object>> GetCategoryBook(int id)
        {
            var categoryBook = await _context.CategoryBooks
                .Include(cb => cb.Book)
                .Include(cb => cb.Category)
                .Where(cb => cb.CategoryBookID == id)
                .Select(cb => new
                {
                    cb.CategoryBookID,
                    cb.BookID,
                    cb.CategoryID,
                    Book = new
                    {
                        cb.Book.BookID,
                        cb.Book.Title
                        // Add other properties as needed
                    },
                    Category = new
                    {
                        cb.Category.CategoryId, // Updated property name
                        cb.Category.Genre
                        // Add other properties as needed
                    }
                })
                .FirstOrDefaultAsync();

            if (categoryBook == null)
            {
                return NotFound();
            }

            return Ok(categoryBook);
        }

        // POST: api/CategoryBooks
        [HttpPost]
        public async Task<ActionResult<CategoryBook>> PostCategoryBook(CategoryBook categoryBook)
        {
            _context.CategoryBooks.Add(categoryBook);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCategoryBook), new { id = categoryBook.CategoryBookID }, categoryBook);
        }

        // PUT: api/CategoryBooks/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCategoryBook(int id, CategoryBook categoryBook)
        {
            if (id != categoryBook.CategoryBookID)
            {
                return BadRequest();
            }

            _context.Entry(categoryBook).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryBookExists(id))
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

        // DELETE: api/CategoryBooks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategoryBook(int id)
        {
            var categoryBook = await _context.CategoryBooks.FindAsync(id);
            if (categoryBook == null)
            {
                return NotFound();
            }

            _context.CategoryBooks.Remove(categoryBook);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CategoryBookExists(int id)
        {
            return _context.CategoryBooks.Any(e => e.CategoryBookID == id);
        }
    }
}
