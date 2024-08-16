using BookStore.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

public class BookService
{
    private readonly MyContext _context;

    public BookService(MyContext context)
    {
        _context = context;
    }

    public async Task AddBookAsync(Book book)
    {
        _context.Books.Add(book);
        await _context.SaveChangesAsync();
    }

    public async Task<Book> GetBookAsync(int id)
    {
        return await _context.Books.FindAsync(id);
    }

    public async Task UpdateBookAsync(Book book)
    {
        _context.Entry(book).State = EntityState.Modified;
        await _context.SaveChangesAsync();
    }

    public async Task DeleteBookAsync(int id)
    {
        var book = await _context.Books.FindAsync(id);
        if (book != null)
        {
            _context.Books.Remove(book);
            await _context.SaveChangesAsync();
        }
    }
}
