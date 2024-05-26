using BookStore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BookStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class bookCategoriesController : ControllerBase
    {
        private readonly MyContext _context;

        public bookCategoriesController(MyContext context)
        {
            _context = context;
        }

        // GET: api/bookCategories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CategoryBook>>> GetCategoryBooks()
        {
            return await _context.categoryBooks.ToListAsync();
        }

        // GET: api/bookCategories/
        [HttpGet("{id}")]
        public async Task<ActionResult<CategoryBook>> GetCategoryBook(int id)
        {
            var categoryBook = await _context.categoryBooks.FindAsync(id);

            if (categoryBook == null)
            {
                return NotFound();
            }

            return categoryBook;
        }

        // POST: api/bookCategories
        [HttpPost]
        public async Task<ActionResult<CategoryBook>> PostCategoryBook(CategoryBook categoryBook)
        {
            _context.categoryBooks.Add(categoryBook);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCategoryBook", new { id = categoryBook.CategoryBookID }, categoryBook);
        }

        // PUT: api/bookCategories/
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

        // DELETE: api/bookCategories/
        [HttpDelete("{id}")]
        public async Task<ActionResult<CategoryBook>> DeleteCategoryBook(int id)
        {
            var categoryBook = await _context.categoryBooks.FindAsync(id);
            if (categoryBook == null)
            {
                return NotFound();
            }

            _context.categoryBooks.Remove(categoryBook);
            await _context.SaveChangesAsync();

            return categoryBook;
        }

        private bool CategoryBookExists(int id)
        {
            return _context.categoryBooks.Any(e => e.CategoryBookID == id);
        }
    }
}
