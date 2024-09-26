using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BookStore.Models;
using Microsoft.EntityFrameworkCore;
using BookStore.DTOs;

namespace BookStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartItemsController : ControllerBase
    {
        private readonly MyContext _context;

        public CartItemsController(MyContext context)
        {
            _context = context;
        }

        // GET: api/CartItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CartItem>>> GetCartItems()
        {
            return await _context.CartItems.ToListAsync();
        }

        // GET: api/CartItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CartItem>> GetCartItem(int id)
        {
            var cartItem = await _context.CartItems.FindAsync(id);

            if (cartItem == null)
            {
                return NotFound();
            }

            return cartItem;
        }

        [HttpGet("total-value")]
        public IActionResult GetCartTotalValue()
        {
            var totalCartValue = _context.CartItems
                .Include(ci => ci.Book)
                .Include(ci => ci.Accessories)
                .Include(ci => ci.GiftCard)
                .Sum(ci => ci.Quantity *
                           ((ci.Book != null ? ci.Book.Price : 0) +
                            (ci.Accessories != null ? ci.Accessories.Price : 0) +
                            (ci.GiftCard != null ? ci.GiftCard.Amount : 0)));

            return Ok(totalCartValue);
        }


        // POST: api/CartItems
        [HttpPost]
        public async Task<IActionResult> CreateCartItems([FromBody] List<CartItemDto> cartItemDtos)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var cartItems = cartItemDtos.Select(cartItemDto => new CartItem
            {
                Quantity = cartItemDto.Quantity,
                BookId = cartItemDto.BookId == 0 ? (int?)null : cartItemDto.BookId,
                AccessoriesID = cartItemDto.AccessoriesID == 0 ? (int?)null : cartItemDto.AccessoriesID,
                GiftCardId = cartItemDto.GiftCardId == 0 ? (int?)null : cartItemDto.GiftCardId
            }).ToList();

            try
            {
                _context.CartItems.AddRange(cartItems);
                await _context.SaveChangesAsync();


                return Ok(cartItems.Select(item => new
                {
                    item.CartItemId, 
                    item.Quantity,
                    item.BookId,
                    item.AccessoriesID,
                    item.GiftCardId
                }).ToList());
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Exception: {ex.Message}");
                if (ex.InnerException != null)
                {
                    Console.WriteLine($"Inner Exception: {ex.InnerException.Message}");
                }

                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while saving the entity changes.");
            }
        }





        // PUT: api/CartItems/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCartItem(int id, CartItem cartItem)
        {
            if (id != cartItem.CartItemId)
            {
                return BadRequest();
            }

            _context.Entry(cartItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.CartItems.Any(e => e.CartItemId == id))
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

        // DELETE: api/CartItems/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CartItem>> DeleteCartItem(int id)
        {
            var cartItem = await _context.CartItems.FindAsync(id);
            if (cartItem == null)
            {
                return NotFound();
            }

            _context.CartItems.Remove(cartItem);
            await _context.SaveChangesAsync();

            return cartItem;
        }
    }
}
