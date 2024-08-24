using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookStore.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LanguageController : ControllerBase
    {
        private readonly MyContext _context;

        public LanguageController(MyContext context)
        {
            _context = context;
        }

        // GET: api/Language
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Language>>> GetLanguages()
        {
            return Ok(await _context.Languages.ToListAsync());
        }

        // GET: api/Language/5
        [HttpGet("{LanguageId}")]
        public async Task<ActionResult<Language>> GetLanguage(int LanguageId)
        {
            var language = await _context.Languages.FindAsync(LanguageId);
            if (language == null)
            {
                return NotFound();
            }
            return language;
        }

        // POST: api/Language
        [HttpPost]
        public async Task<ActionResult<Language>> PostLanguage(Language language)
        {
            _context.Languages.Add(language);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetLanguage), new { LanguageId = language.LanguageId }, language);
        }

        // PUT: api/Language/5
        [HttpPut("{LanguageId}")]
        public async Task<ActionResult> PutLanguage(int LanguageId, Language language)
        {
            if (LanguageId != language.LanguageId)
            {
                return BadRequest();
            }

            _context.Entry(language).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LanguageExists(LanguageId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok();
        }

        // DELETE: api/Language/5
        [HttpDelete("{LanguageId}")]
        public async Task<ActionResult> DeleteLanguage(int LanguageId)
        {
            var language = await _context.Languages.FindAsync(LanguageId);
            if (language == null)
            {
                return NotFound();
            }

            _context.Languages.Remove(language);
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool LanguageExists(int LanguageId)
        {
            return _context.Languages.Any(e => e.LanguageId == LanguageId);
        }
    }
}
