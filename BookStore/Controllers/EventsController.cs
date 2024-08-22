using BookStore.Models; // Adjust namespace if needed
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly MyContext _context;

        public EventController(MyContext context)
        {
            _context = context;
        }

        // GET: api/Events
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Event>>> GetEvents()
        {
            var events = await _context.Events
                .Include(e => e.Authors) // Ensure `Authors` is a navigation property in the `Event` model
                .ToListAsync();

            if (events == null || !events.Any())
            {
                return NotFound();
            }

            return Ok(events);
        }

        // GET: api/Events/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Event>> GetEvent(int id)
        {
            var eventItem = await _context.Events
                .Include(e => e.Authors) // Ensure `Authors` is a navigation property in the `Event` model
                .FirstOrDefaultAsync(e => e.EventsID == id); // Ensure `EventsID` is the correct property name

            if (eventItem == null)
            {
                return NotFound();
            }

            return Ok(eventItem);
        }

        // POST: api/Events
        [HttpPost]
        public async Task<ActionResult<Event>> PostEvent(Event eventItem)
        {
            _context.Events.Add(eventItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEvent), new { id = eventItem.EventsID }, eventItem); // Ensure `EventsID` is the correct property name
        }

        // PUT: api/Events/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEvent(int id, Event eventItem)
        {
            if (id != eventItem.EventsID) // Ensure `EventsID` is the correct property name
            {
                return BadRequest();
            }

            _context.Entry(eventItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventExists(id))
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

        // DELETE: api/Events/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvent(int id)
        {
            var eventItem = await _context.Events.FindAsync(id);
            if (eventItem == null)
            {
                return NotFound();
            }

            _context.Events.Remove(eventItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EventExists(int id)
        {
            return _context.Events.Any(e => e.EventsID == id); // Ensure `EventsID` is the correct property name
        }
    }
}
