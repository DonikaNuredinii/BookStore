using BookStore.DTOs;
using BookStore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

        public BookController(MyContext booksContext)
        {
            _booksContext = booksContext;
        }

        // GET: api/Book
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

        // GET: api/Book/5
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

        // POST: api/Book
        [HttpPost]
        public async Task<ActionResult<Book>> PostBook(Book book)
        {
            using (var transaction = await _booksContext.Database.BeginTransactionAsync())
            {
                try
                {
                    _booksContext.Books.Add(book);
                    await _booksContext.SaveChangesAsync();

                    // Handle Book-Category relationships
                    if (book.CategoryBooks != null && book.CategoryBooks.Any())
                    {
                        foreach (var categoryBook in book.CategoryBooks)
                        {
                            _booksContext.CategoryBooks.Add(new CategoryBook
                            {
                                BookID = book.BookID,
                                CategoryID = categoryBook.CategoryID
                            });
                        }
                        await _booksContext.SaveChangesAsync();
                    }

                    await transaction.CommitAsync();
                    return CreatedAtAction(nameof(GetBook), new { bookID = book.BookID }, book);
                }
                catch (Exception ex)
                {
                    await transaction.RollbackAsync();
                    return StatusCode(500, $"An error occurred while saving the entity changes: {ex.Message} {ex.InnerException?.Message}");
                }
            }
        }



        // PUT: api/Book/5
        [HttpPut("{bookID}")]
        public async Task<IActionResult> PutBook(int bookID, Book book)
        {
            if (bookID != book.BookID)
            {
                return BadRequest();
            }

            var existingBook = await _booksContext.Books
                .Include(b => b.CategoryBooks)
                .FirstOrDefaultAsync(b => b.BookID == bookID);

            if (existingBook == null)
            {
                return NotFound();
            }

            existingBook.Title = book.Title;
            // Update other fields as necessary

            // Remove existing CategoryBooks
            _booksContext.CategoryBooks.RemoveRange(existingBook.CategoryBooks);

            // Add new CategoryBooks
            if (book.CategoryBooks != null && book.CategoryBooks.Any())
            {
                foreach (var categoryBook in book.CategoryBooks)
                {
                    _booksContext.CategoryBooks.Add(new CategoryBook
                    {
                        BookID = book.BookID,
                        CategoryID = categoryBook.CategoryID
                    });
                }
            }

            _booksContext.Entry(existingBook).State = EntityState.Modified;

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

        // DELETE: api/Book/5
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

            // Remove CategoryBooks relationships
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
                    // Add the book
                    _booksContext.Books.Add(request.Book);
                    _booksContext.Books.Add(request.Book);
                    await _booksContext.SaveChangesAsync();

                    // Add book-author relationships
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
