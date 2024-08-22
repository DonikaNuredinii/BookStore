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
    public class EventsController : ControllerBase
    {
        private readonly MyContext _context;

        public EventsController(MyContext context)
        {
            _context = context;
        }

        // GET: api/Events
        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetEvents()
        {
            var events = await _context.Events
                .ToListAsync();

            if (events == null || !events.Any())
            {
                return NotFound();
            }

            var result = events.Select(e => new
            {
                e.EventsID,
                e.EventName,
                e.Location,
                e.Date,
                e.Time,
                e.Description
                // Add related entities here if needed
            });

            return Ok(result);
        }

        // GET: api/Events/{eventID}
        [HttpGet("{eventID}")]
        public async Task<ActionResult<object>> GetEvent(int eventID)
        {
            var eventItem = await _context.Events
                .FirstOrDefaultAsync(e => e.EventsID == eventID);

            if (eventItem == null)
            {
                return NotFound();
            }

            var result = new
            {
                eventItem.EventsID,
                eventItem.EventName,
                eventItem.Location,
                eventItem.Date,
                eventItem.Time,
                eventItem.Description
                // Add related entities here if needed
            };

            return Ok(result);
        }

        // POST: api/Events
        [HttpPost]
        public async Task<ActionResult<Event>> PostEvent(Event eventItem)
        {
            if (eventItem == null)
            {
                return BadRequest("Event cannot be null.");
            }

            _context.Events.Add(eventItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEvent), new { eventID = eventItem.EventsID }, eventItem);
        }

        // PUT: api/Events/{eventID}
        [HttpPut("{eventID}")]
        public async Task<IActionResult> PutEvent(int eventID, Event eventItem)
        {
            if (eventID != eventItem.EventsID)
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
                if (!EventExists(eventID))
                {
                    return NotFound();
                }
                else
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, "Concurrency error occurred.");
                }
            }

            return NoContent();
        }

        // DELETE: api/Events/{eventID}
        [HttpDelete("{eventID}")]
        public async Task<IActionResult> DeleteEvent(int eventID)
        {
            var eventItem = await _context.Events.FindAsync(eventID);
            if (eventItem == null)
            {
                return NotFound();
            }

            _context.Events.Remove(eventItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EventExists(int eventID)
        {
            return _context.Events.Any(e => e.EventsID == eventID);
        }
    }
}
