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
    public class EbookLoansController : ControllerBase
    {
        private readonly MyContext _context;

        public EbookLoansController(MyContext context)
        {
            _context = context;
        }

        // GET: api/EbookLoans
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EbookLoan>>> GetEbookLoans()
        {
            return await _context.EbookLoans
                .Include(el => el.Ebook)
                .Include(el => el.User)
                .ToListAsync();
        }

        // GET: api/EbookLoans/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EbookLoan>> GetEbookLoan(int id)
        {
            var ebookLoan = await _context.EbookLoans
                .Include(el => el.Ebook)
                .Include(el => el.User)
                .FirstOrDefaultAsync(el => el.EbookLoanID == id);

            if (ebookLoan == null)
            {
                return NotFound();
            }

            return ebookLoan;
        }

        // POST: api/EbookLoans
        [HttpPost]
        public async Task<ActionResult<EbookLoan>> CreateEbookLoan([FromBody] EbookLoan ebookLoan)
        {
            if (ebookLoan == null)
            {
                return BadRequest("EbookLoan data is required.");
            }

            // Validate that the Ebook exists
            var ebook = await _context.Ebooks.FindAsync(ebookLoan.EbookID);
            if (ebook == null)
            {
                return NotFound($"Ebook with ID {ebookLoan.EbookID} not found.");
            }

            // Validate that the User exists
            var user = await _context.Users.FindAsync(ebookLoan.UserID);
            if (user == null)
            {
                return NotFound($"User with ID {ebookLoan.UserID} not found.");
            }

            // Create the EbookLoan
            _context.EbookLoans.Add(ebookLoan);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEbookLoan), new { id = ebookLoan.EbookLoanID }, ebookLoan);
        }


        // PUT: api/EbookLoans/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEbookLoan(int id, [FromBody] EbookLoan ebookLoan)
        {
            if (id != ebookLoan.EbookLoanID)
            {
                return BadRequest("EbookLoan ID mismatch.");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Entry(ebookLoan).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EbookLoanExists(id))
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
        [HttpGet("active")]
        public IActionResult GetActiveLoans()
        {
            var activeLoans = _context.EbookLoans.Count(el => !el.IsReturned);
            return Ok(activeLoans);
        }



        // DELETE: api/EbookLoans/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEbookLoan(int id)
        {
            var ebookLoan = await _context.EbookLoans.FindAsync(id);
            if (ebookLoan == null)
            {
                return NotFound();
            }

            _context.EbookLoans.Remove(ebookLoan);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EbookLoanExists(int id)
        {
            return _context.EbookLoans.Any(el => el.EbookLoanID == id);
        }
    }
}
