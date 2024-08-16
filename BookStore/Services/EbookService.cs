using BookStore.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

public class EbookService
{
    private readonly MyContext _context;

    public EbookService(MyContext context)
    {
        _context = context;
    }

    public async Task AddEbookAsync(Ebook ebook)
    {
        _context.Ebooks.Add(ebook);
        await _context.SaveChangesAsync();
    }

    public async Task<Ebook> GetEbookAsync(int id)
    {
        return await _context.Ebooks.Include(e => e.EbookLoans)
                                     .FirstOrDefaultAsync(e => e.BookID == id);
    }

    public async Task UpdateEbookAsync(Ebook ebook)
    {
        _context.Entry(ebook).State = EntityState.Modified;
        await _context.SaveChangesAsync();
    }

    public async Task DeleteEbookAsync(int id)
    {
        var ebook = await _context.Ebooks.FindAsync(id);
        if (ebook != null)
        {
            _context.Ebooks.Remove(ebook);
            await _context.SaveChangesAsync();
        }
    }
}
