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
    public class AuthorController : ControllerBase
    {
        private readonly MyContext _authorcontext;
        public AuthorController(MyContext authorcontext)
        {
            _authorcontext = authorcontext;

        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Author>>> getAuthors()
        {
            if (_authorcontext.Author == null)
            {
                return NotFound();
            }
            return await _authorcontext.Author.ToListAsync();
        }
        [HttpGet("{AuthorID}")]
        public async Task<ActionResult<Author>> GetAuthor(int AuthorID)
        {
            if (_authorcontext.Author == null)
            {
                return NotFound();
            }
            var Author = await _authorcontext.Author.FindAsync(AuthorID);
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
        public async Task<ActionResult<Author>> PostAuthors(Author author)
        {
            _authorcontext.Author.Add(author);
            await _authorcontext.SaveChangesAsync();

            return CreatedAtAction(nameof(getAuthors), new { AuthorID = author.AuthorID }, author);
        }


        [HttpPut("{AuthorID}")]
        public async Task<ActionResult> PutAuthor(int AuthorID, Author author)
        {
            if (AuthorID != author.AuthorID)
            {
                return BadRequest();
            }
            _authorcontext.Entry(author).State = EntityState.Modified;
            try
            {
                await _authorcontext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return Ok();
        }

        [HttpDelete("{AuthorID}")]

        public async Task<ActionResult> DeleteAuthor(int AuthorID)
        {
            if (_authorcontext.Author == null)
            {
                return NotFound();
            }
            var author = await _authorcontext.Author.FindAsync(AuthorID);
            if (author == null)
            {
                return NotFound();
            }
            _authorcontext.Author.Remove(author);
            await _authorcontext.SaveChangesAsync();
            return Ok();
        }
    }
}
