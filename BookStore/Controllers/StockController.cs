using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookStore.Models;

namespace BookStore.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StockController : ControllerBase
    {
        private readonly MyContext _stockContext;

        public StockController(MyContext context)
        {
            _stockContext = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Stock>>> GetStock()
        {
            return await _stockContext.Stock.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Stock>> PostStock(Stock Stock)
        {
            _stockContext.Stock.Add(Stock);
            await _stockContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetStock), new { Stock.StockId }, Stock);
        }
    }
}
