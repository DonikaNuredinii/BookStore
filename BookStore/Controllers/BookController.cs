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
    public class BookController(MyContext context, IWebHostEnvironment webHostEnvironment) : ControllerBase
    {
        private readonly MyContext _context = context;
        private readonly IWebHostEnvironment _webHostEnvironment = webHostEnvironment;

        // GET: api/Books
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Book>>> GetBooks()
        {
            return await _context.Books
                .Include(b => b.BookAuthors)
                .Include(b => b.CategoryBooks)
                .ToListAsync();
        }

        // GET: api/Books/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetBook(int id)
        {
            var book = await _context.Books
                .Include(b => b.BookAuthors)
                    .ThenInclude(ba => ba.Author)
                .Include(b => b.CategoryBooks)
                    .ThenInclude(cb => cb.Category)  
                .FirstOrDefaultAsync(b => b.BookID == id);

            if (book == null)
            {
                return NotFound();
            }

   
            var response = new
            {
                book.BookID,
                book.ISBN,
                book.Title,
                book.Description,
                book.PublicationDate,
                book.PageNumber,
                book.Price,
                book.DateOfadition,
                book.Type,
                book.PublishingHouseId,
                book.StockId,
                book.Image,
                Authors = book.BookAuthors.Select(ba => new { ba.AuthorID, ba.Author.Name }),
                Categories = book.CategoryBooks.Select(cb => new { cb.CategoryID, cb.Category.Genre })
            };

            return Ok(response);
        }


        // POST: api/Books
        [HttpPost]
        public async Task<IActionResult> CreateBook([FromForm] BookUploadRequest request)
        {
            if (request == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
              
                var imageFilePath = SaveFile(request.Image, "src/Images");

                var newBook = new Book
                {
                    ISBN = request.ISBN,
                    Title = request.Title,
                    Description = request.Description,
                    Image = imageFilePath, 
                    PublicationDate = request.PublicationDate,
                    PageNumber = request.PageNumber,
                    Price = request.Price,
                    DateOfadition = request.DateOfadition,
                    PublishingHouseId = request.PublishingHouseId,
                    StockId = request.StockId,
                    Type = request.Type
                };

                _context.Books.Add(newBook);
                await _context.SaveChangesAsync();

                // Handle authors and categories
                foreach (var authorId in request.AuthorIds)
                {
                    _context.BookAuthors.Add(new BookAuthors
                    {
                        BookID = newBook.BookID,
                        AuthorID = authorId
                    });
                }

                foreach (var categoryId in request.CategoryIds)
                {
                    _context.CategoryBooks.Add(new CategoryBook
                    {
                        BookID = newBook.BookID,
                        CategoryID = categoryId
                    });
                }

                await _context.SaveChangesAsync();
                return Ok(newBook);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }

        // PUT: api/Books/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBook(int id, [FromForm] BookUploadRequest request)
        {
            if (id != request.BookID)
            {
                return BadRequest("Book ID mismatch");
            }

            var existingBook = await _context.Books
                .Include(b => b.BookAuthors)
                .Include(b => b.CategoryBooks)
                .FirstOrDefaultAsync(b => b.BookID == id);

            if (existingBook == null)
            {
                return NotFound();
            }

            try
            {
                // Update book properties
                existingBook.ISBN = request.ISBN;
                existingBook.Title = request.Title;
                existingBook.Description = request.Description;
                existingBook.PublicationDate = request.PublicationDate;
                existingBook.PageNumber = request.PageNumber;
                existingBook.Price = request.Price;
                existingBook.DateOfadition = request.DateOfadition;
                existingBook.PublishingHouseId = request.PublishingHouseId;
                existingBook.StockId = request.StockId;
                existingBook.Type = request.Type;

                // Check if a new image file is provided
                if (request.Image != null)
                {
                    existingBook.Image = SaveFile(request.Image, "src/Images");
                }

                // Update authors
                _context.BookAuthors.RemoveRange(existingBook.BookAuthors);
                foreach (var authorId in request.AuthorIds)
                {
                    _context.BookAuthors.Add(new BookAuthors
                    {
                        BookID = existingBook.BookID,
                        AuthorID = authorId
                    });
                }

                // Update categories
                _context.CategoryBooks.RemoveRange(existingBook.CategoryBooks);
                foreach (var categoryId in request.CategoryIds)
                {
                    _context.CategoryBooks.Add(new CategoryBook
                    {
                        BookID = existingBook.BookID,
                        CategoryID = categoryId
                    });
                }

                await _context.SaveChangesAsync();

                return Ok(existingBook);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }


        // DELETE: api/Books/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook(int id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null)
            {
                return NotFound();
            }

            _context.Books.Remove(book);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private string SaveFile(IFormFile file, string folderName)
        {
            if (file == null)
            {
                return null;
            }

            var folderPath = Path.Combine(_webHostEnvironment.WebRootPath, folderName);
            if (!Directory.Exists(folderPath))
            {
                Directory.CreateDirectory(folderPath);
            }

            var uniqueFileName = Guid.NewGuid().ToString() + Path.GetExtension(file.FileName);
            var filePath = Path.Combine(folderPath, uniqueFileName);

            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                file.CopyTo(fileStream);
            }

            return $"/{folderName}/{uniqueFileName}".Replace("\\", "/");
        }

    }
}
