using BookStore.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
            .Include(e => e.Authors)
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
            .Include(e => e.Authors)
            .FirstOrDefaultAsync(e => e.EventsID == id);

        if (eventItem == null)
        {
            return NotFound();
        }

        return Ok(eventItem);
    }
    // GET: api/Events/upcoming
    [HttpGet("upcoming")]
    public IActionResult GetUpcomingEvents()
    {
        var upcomingEvents = _context.Events
            .Where(e => e.Date >= DateTime.Now)  
            .OrderBy(e => e.Date)                
            .ToList();

        if (upcomingEvents == null || !upcomingEvents.Any())
        {
            return NotFound("No upcoming events found.");
        }

        return Ok(upcomingEvents);
    }

    // POST: api/Events
    [HttpPost]
    public async Task<ActionResult<Event>> PostEvent(Event eventItem)
    {
        _context.Events.Add(eventItem);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetEvent), new { id = eventItem.EventsID }, eventItem);
    }

    // PUT: api/Events/5
    [Authorize(Policy = "AdminPolicy")]
    [HttpPut("{id}")]
    public async Task<IActionResult> PutEvent(int id, Event eventItem)
    {
        if (id != eventItem.EventsID)
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
    [Authorize(Policy = "AdminPolicy")]
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
        return _context.Events.Any(e => e.EventsID == id);
    }
}
