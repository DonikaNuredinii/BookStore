using BookStore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class BookAuthorsController : ControllerBase
{
    private readonly MyContext _context;

    public BookAuthorsController(MyContext context)
    {
        _context = context;
    }

    // GET: api/BookAuthors
    [HttpGet]
    public async Task<ActionResult<IEnumerable<object>>> GetBookAuthors()
    {
        var bookAuthors = await _context.BookAuthors
            .Select(ba => new
            {
                ba.BookAuthorsID,
                ba.BookID,
                ba.AuthorID,
                Book = new
                {
                    ba.Book.BookID,
                    ba.Book.Title
                    // Add other properties as needed
                },
                Author = new
                {
                    ba.Author.AuthorID,
                    ba.Author.Name
                    // Add other properties as needed
                }
            })
            .ToListAsync();

        return Ok(bookAuthors);
    }

    // GET: api/BookAuthors/Book/5
    [HttpGet("Book/{bookID}")]
    public async Task<ActionResult<IEnumerable<object>>> GetBookAuthorsByBookID(int bookID)
    {
        var bookAuthors = await _context.BookAuthors
            .Where(ba => ba.BookID == bookID)
            .Select(ba => new
            {
                ba.BookAuthorsID,
                ba.BookID,
                ba.AuthorID,
                Book = new
                {
                    ba.Book.BookID,
                    ba.Book.Title
                    // Add other properties as needed
                },
                Author = new
                {
                    ba.Author.AuthorID,
                    ba.Author.Name
                    // Add other properties as needed
                }
            })
            .ToListAsync();

        if (bookAuthors == null || !bookAuthors.Any())
        {
            return NotFound();
        }

        return Ok(bookAuthors);
    }
    [HttpGet("author/{authorID}")]
    public async Task<ActionResult<IEnumerable<Book>>> GetBooksByAuthor(int authorID)
    {
        var books = await _context.BookAuthors
            .Where(ba => ba.AuthorID == authorID)
            .Include(ba => ba.Book)
            .Select(ba => ba.Book)
            .ToListAsync();

        return Ok(books);
    }
    [HttpGet("api/BookAuthors/top-authors")]
    public IActionResult GetTopAuthors()
    {
        var topAuthors = _context.BookAuthors
            .GroupBy(ba => ba.Author.Name)
            .Select(group => new
            {
                AuthorName = group.Key,
                BookCount = group.Count()
            })
            .OrderByDescending(a => a.BookCount)
            .Take(10) // Get top 10 authors
            .ToList();

        return Ok(topAuthors);
    }


    // POST: api/BookAuthors
    [HttpPost]
    public async Task<ActionResult<BookAuthors>> PostBookAuthors(BookAuthors bookAuthors)
    {
        _context.BookAuthors.Add(bookAuthors);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetBookAuthors), new { id = bookAuthors.BookAuthorsID }, bookAuthors);
    }

    // DELETE: api/BookAuthors/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteBookAuthors(int id)
    {
        var bookAuthors = await _context.BookAuthors.FindAsync(id);
        if (bookAuthors == null)
        {
            return NotFound();
        }

        _context.BookAuthors.Remove(bookAuthors);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    // PUT: api/BookAuthors/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutBookAuthors(int id, BookAuthors bookAuthors)
    {
        if (id != bookAuthors.BookAuthorsID)
        {
            return BadRequest();
        }

        _context.Entry(bookAuthors).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!BookAuthorsExists(id))
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

    private bool BookAuthorsExists(int id)
    {
        return _context.BookAuthors.Any(e => e.BookAuthorsID == id);
    }
}
