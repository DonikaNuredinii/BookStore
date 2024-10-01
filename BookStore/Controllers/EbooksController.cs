using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookStore.Models;
using System.IO;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;

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

        // Get all ebooks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ebook>>> GetEbooks()
        {
            return await _context.Ebooks
                .Include(e => e.EbookLoans)
                .Include(e => e.BookAuthors)
                    .ThenInclude(ba => ba.Author)  // Include authors
                .Include(e => e.CategoryBooks)
                    .ThenInclude(cb => cb.Category)  // Include categories
                .ToListAsync();
        }

        // Get ebook by ID
        [HttpGet("{id}")]
        public async Task<ActionResult<Ebook>> GetEbook(int id)
        {
            var ebook = await _context.Ebooks
                .Include(e => e.EbookLoans)
                .Include(e => e.BookAuthors)
                    .ThenInclude(ba => ba.Author)
                .Include(e => e.CategoryBooks)
                    .ThenInclude(cb => cb.Category)
                .FirstOrDefaultAsync(e => e.BookID == id);

            if (ebook == null)
            {
                return NotFound();
            }

            return ebook;
        }

        [HttpPost]
        public async Task<IActionResult> CreateEbook([FromForm] EbookUploadRequest request)
        {
            if (request == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                // Save PDF and image
                var publicFolderPath = Path.Combine(_webHostEnvironment.ContentRootPath, "..", "my-react-app", "public");
                var pdfFilePath = SaveFile(request.PdfFile, publicFolderPath);

                var imageFolderPath = Path.Combine(_webHostEnvironment.ContentRootPath, "..", "my-react-app", "src", "Images");
                var imageFilePath = SaveFile(request.Image, imageFolderPath);

                // Create new Ebook entity
                var newEbook = new Ebook
                {
                    ISBN = request.ISBN,
                    Title = request.Title,
                    Description = request.Description,
                    Content = pdfFilePath,
                    Image = imageFilePath,
                    PublicationDate = request.PublicationDate,
                    PageNumber = request.PageNumber,
                    Price = request.Price,
                    DateOfadition = request.DateOfadition,
                    PublishingHouseId = request.PublishingHouseId,
                    StockId = request.StockId,
                    Type = "Ebook"
                };

                _context.Ebooks.Add(newEbook);
                await _context.SaveChangesAsync();

                // Handle authors: iterate through the list of author IDs
                foreach (var authorId in request.AuthorIds)
                {
                    _context.BookAuthors.Add(new BookAuthors
                    {
                        BookID = newEbook.BookID,
                        AuthorID = authorId
                    });
                }

                // Handle categories: iterate through the list of category IDs
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
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }



        // Update ebook
        [Authorize(Policy = "AdminPolicy")]
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEbook(int id, [FromForm] EbookUploadRequest request)
        {
            var existingEbook = await _context.Ebooks.FindAsync(id);
            if (existingEbook == null)
            {
                return NotFound();
            }

            existingEbook.ISBN = request.ISBN;
            existingEbook.Title = request.Title;
            existingEbook.Description = request.Description;
            existingEbook.PublicationDate = request.PublicationDate;
            existingEbook.PageNumber = request.PageNumber;
            existingEbook.Price = request.Price;
            existingEbook.DateOfadition = request.DateOfadition;

            // Save new PDF file if provided
            if (request.PdfFile != null)
            {
                var publicFolderPath = Path.Combine(_webHostEnvironment.ContentRootPath, "..", "my-react-app", "public");
                var pdfFilePath = SaveFile(request.PdfFile, publicFolderPath);
                existingEbook.Content = pdfFilePath;
            }

            // Save new image file if provided
            if (request.Image != null)
            {
                var imageFolderPath = Path.Combine(_webHostEnvironment.ContentRootPath, "..", "my-react-app", "src", "Images");
                var imageFilePath = SaveFile(request.Image, imageFolderPath);
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


        // Delete ebook
        [Authorize(Policy = "AdminPolicy")]
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
        private string SaveFile(IFormFile file, string folderName)
        {
            if (file == null)
            {
                return null;
            }

            // Create the folder path relative to wwwroot
            var folderPath = Path.Combine(_webHostEnvironment.WebRootPath, folderName);
            if (!Directory.Exists(folderPath))
            {
                Directory.CreateDirectory(folderPath);
            }

            var fileName = Path.GetFileName(file.FileName);
            var filePath = Path.Combine(folderPath, fileName);

            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                file.CopyTo(fileStream);
            }

            // Return the path relative to the root URL
            return $"/{folderName}/{fileName}";
        }





    }
}
