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
            if (_booksContext.Books == null)
            {
                return NotFound();
            }
            return await _booksContext.Books.ToListAsync();
        }

        [HttpGet("{BookID}")]
        public async Task<ActionResult<Book>> GetBook(int BookID)
        {
            if (_booksContext.Books == null)
            {
                return NotFound();
            }
            var Author = await _booksContext.Books.FindAsync(BookID);
            if (Author == null)
            {
                return NotFound();
            }
            else
            {
                return Author;
            }
        }
        [HttpPost]
        public async Task<ActionResult<Book>> PostBook(Book book)
        {
            _booksContext.Books.Add(book);
            await _booksContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetBooks), new { BookID = book.BookID }, book);
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
