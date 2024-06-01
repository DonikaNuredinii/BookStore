using BookStore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
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

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Book>>> GetBooks()
        {
            var books = await _booksContext.Books.ToListAsync();

            if (books == null)
            {
                return NotFound();
            }

            return books;
        }

        [HttpGet("{BookID}")]
        public async Task<ActionResult<Book>> GetBook(int BookID)
        {
            var book = await _booksContext.Books.FindAsync(BookID);

            if (book == null)
            {
                return NotFound();
            }

            return book;
        }

        [HttpPost]
        public async Task<ActionResult<Book>> PostBook(Book book)
        {
            _booksContext.Books.Add(book);
            await _booksContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetBook), new { BookID = book.BookID }, book);
        }

        [HttpPut("{BookID}")]
        public async Task<ActionResult> PutBook(int BookID, Book book)
        {
            if (BookID != book.BookID)
            {
                return BadRequest();
            }

            _booksContext.Entry(book).State = EntityState.Modified;

            try
            {
                await _booksContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookExists(BookID))
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

        [HttpDelete("{BookID}")]
        public async Task<ActionResult> DeleteBook(int BookID)
        {
            var book = await _booksContext.Books.FindAsync(BookID);
            if (book == null)
            {
                return NotFound();
            }

            _booksContext.Books.Remove(book);
            await _booksContext.SaveChangesAsync();

            return Ok();
        }

        private bool BookExists(int BookID)
        {
            return _booksContext.Books.Any(e => e.BookID == BookID);
        }
    }
}
