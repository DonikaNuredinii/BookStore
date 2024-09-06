using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookStore.Models;
using System.IO;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;

namespace BookStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EbooksController : ControllerBase
    {
        private readonly MyContext _context;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public EbooksController(MyContext context, IWebHostEnvironment webHostEnvironment)
        {
            _context = context;
            _webHostEnvironment = webHostEnvironment;
        }

        // GET: api/Ebooks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ebook>>> GetEbooks()
        {
            return await _context.Ebooks
                .Include(e => e.EbookLoans)
                .ToListAsync();
        }

        // GET: api/Ebooks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ebook>> GetEbook(int id)
        {
            var ebook = await _context.Ebooks
                .Include(e => e.EbookLoans)
                .FirstOrDefaultAsync(e => e.BookID == id);

            if (ebook == null)
            {
                return NotFound();
            }

            return ebook;
        }

        // POST: api/Ebooks
        [HttpPost]
        public async Task<IActionResult> CreateEbook([FromForm] EbookUploadRequest request)
        {
            if (request == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                // Save the PDF file to /wwwroot/pdfs/
                var pdfFilePath = SaveFile(request.PdfFile, "pdfs");

                // Save the image to /wwwroot/images/
                var imageFilePath = SaveFile(request.Image, "Images");

                // Create new Ebook entity and save to the database
                var newEbook = new Ebook
                {
                    ISBN = request.ISBN,
                    Title = request.Title,
                    Description = request.Description,
                    Content = pdfFilePath, // Store the relative path to the PDF file
                    Image = imageFilePath, // Store the relative path to the Image file
                    PublicationDate = request.PublicationDate,
                    PageNumber = request.PageNumber,
                    Price = request.Price,
                    DateOfadition = request.DateOfadition,
                    PublishingHouseId = request.PublishingHouseId,
                    StockId = request.StockId,
                    Type = "Ebook" // Set the type explicitly
                };

                _context.Ebooks.Add(newEbook);
                await _context.SaveChangesAsync();

                // Add authors and categories
                foreach (var authorId in request.AuthorIds)
                {
                    _context.BookAuthors.Add(new BookAuthors
                    {
                        BookID = newEbook.BookID,
                        AuthorID = authorId
                    });
                }

                foreach (var categoryId in request.CategoryIds)
                {
                    _context.CategoryBooks.Add(new CategoryBook
                    {
                        BookID = newEbook.BookID,
                        CategoryID = categoryId
                    });
                }

                await _context.SaveChangesAsync();
                return Ok(newEbook);
            }
            catch (DbUpdateException ex)
            {
                // Log the detailed error
                return StatusCode(500, $"An error occurred while saving the entity changes: {ex.InnerException?.Message}");
            }
            catch (Exception ex)
            {
                // For any other general exceptions
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }

        // PUT: api/Ebooks/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEbook(int id, [FromForm] EbookUploadRequest request)
        {
            var existingEbook = await _context.Ebooks.FindAsync(id);
            if (existingEbook == null)
            {
                return NotFound();
            }

            // Update properties
            existingEbook.ISBN = request.ISBN;
            existingEbook.Title = request.Title;
            existingEbook.Description = request.Description;
            existingEbook.PublicationDate = request.PublicationDate;
            existingEbook.PageNumber = request.PageNumber;
            existingEbook.Price = request.Price;
            existingEbook.DateOfadition = request.DateOfadition;

            // Update PDF file if a new one is uploaded
            if (request.PdfFile != null)
            {
                var pdfFilePath = SaveFile(request.PdfFile, "pdfs");
                existingEbook.Content = pdfFilePath;
            }

            // Update Image file if a new one is uploaded
            if (request.Image != null)
            {
                var imageFilePath = SaveFile(request.Image, "images");
                existingEbook.Image = imageFilePath;
            }

            // Update authors and categories
            _context.BookAuthors.RemoveRange(_context.BookAuthors.Where(ba => ba.BookID == id));
            foreach (var authorId in request.AuthorIds)
            {
                _context.BookAuthors.Add(new BookAuthors
                {
                    BookID = existingEbook.BookID,
                    AuthorID = authorId
                });
            }

            _context.CategoryBooks.RemoveRange(_context.CategoryBooks.Where(cb => cb.BookID == id));
            foreach (var categoryId in request.CategoryIds)
            {
                _context.CategoryBooks.Add(new CategoryBook
                {
                    BookID = existingEbook.BookID,
                    CategoryID = categoryId
                });
            }

            await _context.SaveChangesAsync();
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
        private string SaveFile(IFormFile file, string folder)
        {
            if (file == null || string.IsNullOrWhiteSpace(folder))
            {
                Console.WriteLine("File or folder is null.");
                return null;
            }

            // Ensure that the folder path is created dynamically if it doesn't exist
            var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath ?? string.Empty, folder);

            if (string.IsNullOrWhiteSpace(_webHostEnvironment.WebRootPath))
            {
                throw new InvalidOperationException("WebRootPath is not set.");
            }

            if (!Directory.Exists(uploadsFolder))
            {
                Directory.CreateDirectory(uploadsFolder);  // Create the folder if it doesn't exist
            }

            var uniqueFileName = Path.GetRandomFileName() + Path.GetExtension(file.FileName);
            var filePath = Path.Combine(uploadsFolder, uniqueFileName);

            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                file.CopyTo(fileStream);
            }

            // Return the relative path of the file
            return Path.Combine(folder, uniqueFileName).Replace("\\", "/");
        }



    }
}
