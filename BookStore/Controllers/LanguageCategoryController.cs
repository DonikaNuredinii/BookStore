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
    public class LanguageCategoryController : ControllerBase
    {
        private readonly MyContext _context;

        public LanguageCategoryController(MyContext context)
        {
            _context = context;
        }

        // GET: api/LanguageCategory
        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetLanguageCategories()
        {
            var languageCategories = await _context.LanguageCategories
                .Include(lc => lc.Language)
                .Include(lc => lc.Category)
                .Select(lc => new
                {
                    lc.LanguageCategoryID,
                    lc.LanguageId,
                    lc.CategoryId,
                    Language = new
                    {
                        lc.Language.LanguageId,
                        lc.Language.LanguageName
                    },
                    Category = new
                    {
                        lc.Category.CategoryId,
                        lc.Category.Genre,
                        lc.Category.CategoryDescription,
                        lc.Category.CreatioDate
                    }
                })
                .ToListAsync();

            return Ok(languageCategories);
        }

        // GET: api/LanguageCategory/5
        [HttpGet("{id}")]
        public async Task<ActionResult<object>> GetLanguageCategory(int id)
        {
            var languageCategory = await _context.LanguageCategories
                .Include(lc => lc.Language)
                .Include(lc => lc.Category)
                .Where(lc => lc.LanguageCategoryID == id)
                .Select(lc => new
                {
                    lc.LanguageCategoryID,
                    lc.LanguageId,
                    lc.CategoryId,
                    Language = new
                    {
                        lc.Language.LanguageId,
                        lc.Language.LanguageName
                    },
                    Category = new
                    {
                        lc.Category.CategoryId,
                        lc.Category.Genre,
                        lc.Category.CategoryDescription,
                        lc.Category.CreatioDate
                    }
                })
                .FirstOrDefaultAsync();

            if (languageCategory == null)
            {
                return NotFound();
            }

            return Ok(languageCategory);
        }

        // GET: api/LanguageCategory/GetCategoriesByLanguage/1
        [HttpGet("GetCategoriesByLanguage/{languageId}")]
        public async Task<ActionResult<IEnumerable<object>>> GetCategoriesByLanguage(int languageId)
        {
            var categories = await _context.LanguageCategories
                .Where(lc => lc.LanguageId == languageId)
                .Include(lc => lc.Category)  // Include Category to get full category data
                .Select(lc => new
                {
                    lc.Category.CategoryId,
                    lc.Category.Genre,
                    lc.Category.CategoryDescription,
                    lc.Category.CreatioDate
                })
                .Distinct()  // Ensure no duplicate categories
                .ToListAsync();

            if (!categories.Any())
            {
                return NotFound("No categories found for the specified language.");
            }

            return Ok(categories);
        }

        // POST: api/LanguageCategory
        [HttpPost]
        public async Task<ActionResult<LanguageCategory>> PostLanguageCategory(LanguageCategory languageCategory)
        {
            _context.LanguageCategories.Add(languageCategory);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetLanguageCategory), new { id = languageCategory.LanguageCategoryID }, languageCategory);
        }

        // PUT: api/LanguageCategory/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLanguageCategory(int id, LanguageCategory languageCategory)
        {
            if (id != languageCategory.LanguageCategoryID)
            {
                return BadRequest();
            }

            _context.Entry(languageCategory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LanguageCategoryExists(id))
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

        // DELETE: api/LanguageCategory/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLanguageCategory(int id)
        {
            var languageCategory = await _context.LanguageCategories.FindAsync(id);
            if (languageCategory == null)
            {
                return NotFound();
            }

            _context.LanguageCategories.Remove(languageCategory);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LanguageCategoryExists(int id)
        {
            return _context.LanguageCategories.Any(e => e.LanguageCategoryID == id);
        }
    }
}
