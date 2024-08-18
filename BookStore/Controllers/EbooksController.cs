using BookStore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace BookStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EbooksController : ControllerBase
    {
        private readonly MyContext _context;
        private readonly HttpClient _httpClient;

        public EbooksController(MyContext context, HttpClient httpClient)
        {
            _context = context;
            _httpClient = httpClient;
        }

        // GET: api/Ebooks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ebook>>> GetEbooks()
        {
            return await _context.Ebooks.Include(e => e.EbookLoans).ToListAsync();
        }

        // GET: api/Ebooks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ebook>> GetEbook(int id)
        {
            var ebook = await _context.Ebooks.Include(e => e.EbookLoans)
                                             .FirstOrDefaultAsync(e => e.BookID == id);

            if (ebook == null)
            {
                return NotFound();
            }

            return ebook;
        }

        // POST: api/Ebooks
        [HttpPost]
        public async Task<ActionResult<Ebook>> CreateEbook([FromBody] Ebook ebook)
        {
            if (ebook == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Ebooks.Add(ebook);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEbook), new { id = ebook.BookID }, ebook);
        }

        // PUT: api/Ebooks/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEbook(int id, [FromBody] Ebook ebook)
        {
            if (id != ebook.BookID)
            {
                return BadRequest();
            }

            if (ebook == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Entry(ebook).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EbookExists(id))
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

        // DELETE: api/Ebooks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEbook(int id)
        {
            var ebook = await _context.Ebooks.FindAsync(id);
            if (ebook == null)
            {
                return NotFound();
            }

            _context.Ebooks.Remove(ebook);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // GET: api/Ebooks/content/5
        [HttpGet("content/{id}")]
        public async Task<IActionResult> GetContent(int id)
        {
            var ebook = await _context.Ebooks.FindAsync(id);
            if (ebook == null || string.IsNullOrEmpty(ebook.Content))
            {
                return NotFound();
            }

            var pdfUrl = ebook.Content;

            try
            {
                using var cts = new CancellationTokenSource(TimeSpan.FromSeconds(30)); // 30 seconds timeout
                var response = await _httpClient.GetAsync(pdfUrl, cts.Token);
                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsByteArrayAsync();

                    // Optionally cache the content here

                    return File(content, "application/pdf");
                }
                else
                {
                    var errorMessage = await response.Content.ReadAsStringAsync();
                    return StatusCode((int)response.StatusCode, $"Error fetching PDF: {errorMessage}");
                }
            }
            catch (TaskCanceledException)
            {
                return StatusCode(504, "Request timed out while fetching the PDF.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }


        private bool EbookExists(int id)
        {
            return _context.Ebooks.Any(e => e.BookID == id);
        }
    }
}
