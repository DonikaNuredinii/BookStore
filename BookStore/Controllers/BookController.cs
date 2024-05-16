using BookStore.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using BookStore.Models;

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
            var booksWithAuthors = await _booksContext.Books
                .Include(b => b.BookAuthors)
                    .ThenInclude(ba => ba.Author)
                .ToListAsync();

            var booksDTO = booksWithAuthors.Select(book => new Book
            {
                BookID = book.BookID,
                ISBN = book.ISBN,

            }).ToList();

            return booksDTO;
        }

        [HttpGet("{BookID}")]
        public async Task<ActionResult<Book>> GetBook(int BookID)
        {
            var book = await _booksContext.Books
                .Include(b => b.BookAuthors)
                    .ThenInclude(ba => ba.Author)
                .FirstOrDefaultAsync(b => b.BookID == BookID);

            if (book == null)
            {
                return NotFound();
            }

            // Create a DTO object with only the necessary properties
            var bookDTO = new Book
            {
                BookID = book.BookID,
                ISBN = book.ISBN,
                // Add other properties as needed
            };

            return bookDTO;
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
				throw;
			}
			return Ok();
		}

		[HttpDelete("{BookID}")]

		public async Task<ActionResult> DeleteBook(int BookID)
		{
			if (_booksContext.Books == null)
			{
				return NotFound();
			}
			var book = await _booksContext.Books.FindAsync(BookID);
			if (book == null)
			{
				return NotFound();
			}
			_booksContext.Books.Remove(book);
			await _booksContext.SaveChangesAsync();
			return Ok();
		}
	}
}
