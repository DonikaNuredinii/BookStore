using BookStore.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using BookStore.Models;

namespace BookStore.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PublishingHousesController : ControllerBase
    {
        private readonly MyContext _context;

        public PublishingHousesController(MyContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PublishingHouse>>> GetPublishingHouses()
        {
            return await _context.PublishingHouses.ToListAsync();
        }
        [HttpGet("{PublishingHouseId}")]
        public async Task<ActionResult<PublishingHouse>> GetPublishingHouse(int PublishingHouseId)
        {
            if (_context.PublishingHouses == null)
            {
                return NotFound();
            }
            var pubishingHouse = await _context.PublishingHouses.FindAsync(PublishingHouseId);
            if (pubishingHouse == null)
            {
                return NotFound();
            }
            else
            {
                return pubishingHouse;
            }
        }

        [HttpDelete("{PublishingHouseId}")]

        public async Task<ActionResult> DeletePublishingHouse(int PublishingHouseId)
        {
            if (_context.PublishingHouses == null)
            {
                return NotFound();
            }
            var publishinghouse = await _context.PublishingHouses.FindAsync(PublishingHouseId);
            if (publishinghouse == null)
            {
                return NotFound();
            }
            _context.PublishingHouses.Remove(publishinghouse);
            await _context.SaveChangesAsync();
            return Ok();
        }
        [HttpPost]
        public async Task<ActionResult<PublishingHouse>> PostpublishinhHouse(PublishingHouse publishingHouse)
        {
            _context.PublishingHouses.Add(publishingHouse);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPublishingHouses), new { publishingHouseId = publishingHouse.PublishingHouseId }, publishingHouse);
        }
      


        [HttpPut("{PublishingHouseId}")]
        public async Task<ActionResult> PutPublishingHouse(int PublishingHouseId, PublishingHouse publishingHouse)
        {
            if (PublishingHouseId != publishingHouse.PublishingHouseId)
            {
                return BadRequest();
            }
            _context.Entry(publishingHouse).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return Ok();
        }

    }
}
