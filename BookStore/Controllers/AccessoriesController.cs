using System.Collections.Generic;
using System.Threading.Tasks;
using BookStore.Models;
using System.Net;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace Bookstore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccessoriesController : ControllerBase
    {
        private readonly MyContext _accessoriesContext;
        public AccessoriesController(MyContext accessoriesContext)
        {
            _accessoriesContext = accessoriesContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Accessories>>> GetAccessories()
        {
            return await _accessoriesContext.Accessories.ToListAsync();
        }

        [HttpGet("{AccessoriesID}")]
        public async Task<ActionResult<Accessories>> GetAccessories(int AccessoriesID)
        {
            var accessories = await _accessoriesContext.Accessories.FindAsync(AccessoriesID);
            if (accessories == null)
            {
                return NotFound();
            }
            return accessories;
        }

        [HttpPost]
        public async Task<ActionResult<Accessories>> PostAccessories(Accessories accessories)
        {
            _accessoriesContext.Accessories.Add(accessories);
            await _accessoriesContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAccessories), new { AccessoriesID = accessories.AccessoriesID }, accessories);
        }

        [Authorize(Policy = "AdminPolicy")]
        [HttpPut("{AccessoriesID}")]
        public async Task<ActionResult> PutAccessory(int AccessoriesID, Accessories accessories)
        {
            if (AccessoriesID != accessories.AccessoriesID)
            {
                return BadRequest();
            }

            _accessoriesContext.Entry(accessories).State = EntityState.Modified;

            try
            {
                await _accessoriesContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return Ok();
        }

        [Authorize(Policy = "AdminPolicy")]
        [HttpDelete("{AccessoriesID}")]
        public async Task<ActionResult> DeleteAccessories(int AccessoriesID)
        {

            var accessories = await _accessoriesContext.Accessories.FindAsync(AccessoriesID);
            if (accessories == null)
            {
                return NotFound();
            }
            _accessoriesContext.Accessories.Remove(accessories);
            await _accessoriesContext.SaveChangesAsync();

            return Ok();
        }
    }
}