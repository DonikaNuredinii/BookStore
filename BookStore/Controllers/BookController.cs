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
                 .Include(b => b.LanguageBooks)
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
                .Include(b => b.LanguageBooks)
                    .ThenInclude(lb => lb.Language)
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
                Categories = book.CategoryBooks.Select(cb => new { cb.CategoryID, cb.Category.Genre }),
                Languages = book.LanguageBooks.Select(lb => new { lb.LanguageID, lb.Language.LanguageName })
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
                // Save the image (if any)
                var imageFilePath = request.Image != null ? SaveFile(request.Image, "src/Images") : null;

                // Create a new Book instance
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
                    Type = request.Type,
                };

                // Add the book to the Books table
                _context.Books.Add(newBook);
                await _context.SaveChangesAsync();

                // Handle the many-to-many relationship with LanguageBook
                var languageBook = new LanguageBook
                {
                    BookID = newBook.BookID,
                    LanguageID = request.LanguageId
                };
                _context.LanguageBooks.Add(languageBook);

                // Handle authors and categories
                foreach (var authorId in request.AuthorIds)
                {
                    var bookAuthor = new BookAuthors
                    {
                        BookID = newBook.BookID,
                        AuthorID = authorId
                    };
                    _context.BookAuthors.Add(bookAuthor);
                }

                foreach (var categoryId in request.CategoryIds)
                {
                    var categoryBook = new CategoryBook
                    {
                        BookID = newBook.BookID,
                        CategoryID = categoryId
                    };
                    _context.CategoryBooks.Add(categoryBook);
                }

                // Save all the changes
                await _context.SaveChangesAsync();

                return Ok(newBook);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }


        // PUT: api/Books/{id}
        [Authorize(Policy = "AdminPolicy")]
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBook(int id, [FromForm] BookUploadRequest request)
        {
            if (id != request.BookID)
            {
                return BadRequest("Book ID mismatch");
            }

            var existingBook = await _context.Books
                .Include(b => b.LanguageBooks)
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

                // Update language
                var existingLanguage = existingBook.LanguageBooks.FirstOrDefault();
                if (existingLanguage != null)
                {
                    existingLanguage.LanguageID = request.LanguageId;
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
        [Authorize(Policy = "AdminPolicy")]
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
        [HttpGet("GetBooksByLanguage/{languageId}")]
        public async Task<ActionResult<IEnumerable<Book>>> GetBooksByLanguage(int languageId)
        {
            var books = await _context.LanguageBooks
                .Include(lb => lb.Book)
                .Where(lb => lb.LanguageID == languageId)
                .Select(lb => lb.Book)
                .ToListAsync();

            if (!books.Any())
            {
                return NotFound();
            }

            return Ok(books);
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

            var fileName = Path.GetFileName(file.FileName);
            var filePath = Path.Combine(folderPath, fileName);

            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                file.CopyTo(fileStream);
            }

            return $"/{folderName}/{fileName}";
        }


    }
}
