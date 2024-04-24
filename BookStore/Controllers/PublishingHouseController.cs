using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
    }
}
