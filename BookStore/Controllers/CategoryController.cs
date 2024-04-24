using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly CategoriesContext _categoriesContext;


        public CategoryController(CategoriesContext categoriesContext)
        {
            _categoriesContext = categoriesContext;

        }
        [HttpGet]

        public async Task<ActionResult<IEnumerable<Category>>> getCategories()
        {
            if (_categoriesContext.Categories == null)
            {
                return NotFound();
            }
            return await _categoriesContext.Categories.ToListAsync();
        }
        [HttpGet("{CategoryId}")]




        public async Task<ActionResult<Category>> GetCategory(int CategoryId)
        {
            if (_categoriesContext.Categories == null)
            {
                return NotFound();
            }
            var category = await _categoriesContext.Categories.FindAsync(CategoryId);
            if (category == null)
            {
                return NotFound();
            }
            else
            {
                return category;
            }
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
            if (_categoriesContext.Categories == null)
            {
                return NotFound();
            }
            var category = await _categoriesContext.Categories.FindAsync(CategoryId);
            if (category == null)
            {
                return NotFound();
            }
            _categoriesContext.Categories.Remove((Category)category);
            await _categoriesContext.SaveChangesAsync();
            return Ok();
        }
    }
}

