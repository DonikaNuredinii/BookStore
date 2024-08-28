using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookStore.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using SendGrid.Helpers.Mail;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly MyContext _categoriesContext;

        public CategoryController(MyContext categoriesContext)
        {
            _categoriesContext = categoriesContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategories()
        {
            return Ok(await _categoriesContext.Categories.ToListAsync());
        }

        [HttpGet("paged")]
        public async Task<ActionResult<IEnumerable<Category>>> GetPagedCategories(int page = 1, int pageSize = 10)
        {
            var categories = await _categoriesContext.Categories
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
            var totalCategories = await _categoriesContext.Categories.CountAsync();

            return Ok(new
            {
                TotalCategories = totalCategories,
                Categories = categories
            });
        }


        [HttpGet("{CategoryId}")]
        public async Task<ActionResult<Category>> GetCategory(int CategoryId)
        {
            var category = await _categoriesContext.Categories.FindAsync(CategoryId);
            if (category == null)
            {
                return NotFound();
            }
            return category;
        }
        [HttpGet("GetCategoriesByLanguage/{languageId}")]
        public IActionResult GetCategoriesByLanguage(int languageId)
        {
            var categories = _categoriesContext.LanguageCategories
                .Where(lc => lc.LanguageId == languageId)
                .Select(lc => lc.Category)
                .ToList();

            return Ok(categories);
        }


        [HttpPost]
        public async Task<ActionResult<Category>> PostCategory(Category category)
        {
            _categoriesContext.Categories.Add(category);
            await _categoriesContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCategory), new { CategoryId = category.CategoryId }, category);
        }

        [HttpPut("{CategoryId}")]
        public async Task<ActionResult> PutCategory(int CategoryId, Category category)
        {
            if (CategoryId != category.CategoryId)
            {
                return BadRequest();
            }

            _categoriesContext.Entry(category).State = EntityState.Modified;

            try
            {
                await _categoriesContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return Ok();
        }

        [HttpDelete("{CategoryId}")]
        public async Task<ActionResult> DeleteCategory(int CategoryId)
        {
            var category = await _categoriesContext.Categories.FindAsync(CategoryId);
            if (category == null)
            {
                return NotFound();
            }

            _categoriesContext.Categories.Remove(category);
            await _categoriesContext.SaveChangesAsync();

            return Ok();
        }
    }
}
