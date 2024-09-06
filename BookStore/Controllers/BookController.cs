using BookStore.DTOs;
using BookStore.Models;
using BookStore.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SendGrid.Helpers.Mail;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly MyContext _booksContext;
        private readonly BookService _bookService;

        public BookController(MyContext booksContext, BookService bookService)
        {
            _booksContext = booksContext;
            _bookService = bookService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Book>>> GetBooks()
        {
            var books = await _booksContext.Books
                .Include(b => b.BookAuthors)
                    .ThenInclude(ba => ba.Author)
                .Include(b => b.CategoryBooks)
                    .ThenInclude(cb => cb.Category)
                .ToListAsync();

            if (!books.Any())
            {
                return NotFound();
            }

            return Ok(books);
        }


        [HttpGet("{bookID}")]
        public async Task<ActionResult<BookResponse>> GetBook(int bookID)
        {
            var book = await _booksContext.Books
                .Include(b => b.BookAuthors)
                    .ThenInclude(ba => ba.Author)
                .Include(b => b.CategoryBooks)
                    .ThenInclude(cb => cb.Category)
                .FirstOrDefaultAsync(b => b.BookID == bookID);

            if (book == null)
            {
                return NotFound();
            }

            var authors = book.BookAuthors.Select(ba => ba.Author).ToList();
            var categories = book.CategoryBooks.Select(cb => cb.Category).ToList();

            var result = new BookResponse
            {
                Book = book,
                Authors = authors,
                Categories = categories
            };

            return Ok(result);
        }
        [HttpGet("GetBooksByLanguage/{languageId}")]
        public async Task<ActionResult<IEnumerable<Book>>> GetBooksByLanguage(int languageId)
        {
            var books = await _booksContext.LanguageBooks
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

        [HttpPost]
        public async Task<ActionResult<Book>> PostBook(Book book)
        {
            await _bookService.AddBookAsync(book);
            return CreatedAtAction(nameof(GetBook), new { bookID = book.BookID }, book);
        }

        [HttpPut("{bookID}")]
        public async Task<IActionResult> PutBook(int bookID, [FromBody] BookUpdateRequest request)
        {
            if (bookID != request.Book.BookID)
            {
                return BadRequest("Book ID mismatch");
            }

            // Fetch the existing book record
            var existingBook = await _booksContext.Books
                .Include(b => b.BookAuthors)
                .Include(b => b.CategoryBooks)
                .FirstOrDefaultAsync(b => b.BookID == bookID);

            if (existingBook == null)
            {
                return NotFound();
            }

            // Update the book's basic details
            existingBook.Title = request.Book.Title;
            existingBook.ISBN = request.Book.ISBN;
            existingBook.PublicationDate = request.Book.PublicationDate;
            existingBook.PageNumber = request.Book.PageNumber;
            existingBook.Price = request.Book.Price;
            existingBook.Description = request.Book.Description;
            existingBook.DateOfadition = request.Book.DateOfadition;
            existingBook.Type = request.Book.Type;
            existingBook.PublishingHouseId = request.Book.PublishingHouseId;
            existingBook.StockId = request.Book.StockId;

            // Handle the authors
            _booksContext.BookAuthors.RemoveRange(existingBook.BookAuthors);
            foreach (var authorId in request.AuthorIds)
            {
                _booksContext.BookAuthors.Add(new BookAuthors
                {
                    BookID = bookID,
                    AuthorID = authorId
                });
            }

            // Handle the categories
            _booksContext.CategoryBooks.RemoveRange(existingBook.CategoryBooks);
            foreach (var categoryId in request.CategoryIds)
            {
                _booksContext.CategoryBooks.Add(new CategoryBook
                {
                    BookID = bookID,
                    CategoryID = categoryId
                });
            }

            // Save changes
            try
            {
                await _booksContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookExists(bookID))
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


        [HttpDelete("{bookID}")]
        public async Task<IActionResult> DeleteBook(int bookID)
        {
            var book = await _booksContext.Books
                .Include(b => b.CategoryBooks)
                .FirstOrDefaultAsync(b => b.BookID == bookID);

            if (book == null)
            {
                return NotFound();
            }

            _booksContext.CategoryBooks.RemoveRange(book.CategoryBooks);
            _booksContext.Books.Remove(book);
            await _booksContext.SaveChangesAsync();

            return NoContent();
        }

        [HttpPost("AddBookWithAuthors")]
        public async Task<IActionResult> AddBookWithAuthors(AddBookWithAuthorsRequest request)
        {
            if (request == null || request.Book == null || !request.AuthorIds.Any())
            {
                return BadRequest("Invalid book or author data");
            }

            using (var transaction = await _booksContext.Database.BeginTransactionAsync())
            {
                try
                {
                    _booksContext.Books.Add(request.Book);
                    await _booksContext.SaveChangesAsync();

                    foreach (var authorId in request.AuthorIds)
                    {
                        _booksContext.BookAuthors.Add(new BookAuthors
                        {
                            BookID = request.Book.BookID,


                            AuthorID = authorId
                        });
                    }
                    await _booksContext.SaveChangesAsync();

                    await transaction.CommitAsync();
                    return Ok(request.Book);
                }
                catch (Exception ex)
                {
                    await transaction.RollbackAsync();
                    return StatusCode(500, "An error occurred: " + ex.Message);
                }
            }
        }

        private bool BookExists(int bookID)
        {
            return _booksContext.Books.Any(e => e.BookID == bookID);
        }
    }
}
