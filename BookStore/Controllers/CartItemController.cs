using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using BookStore.Models;
using Microsoft.EntityFrameworkCore;

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
        public ActionResult<IEnumerable<CartItem>> GetCartItems()
        {
            return _context.CartItems.ToList();
        }

        // GET: api/CartItems/5
        [HttpGet("{id}")]
        public ActionResult<CartItem> GetCartItem(int id)
        {
            var cartItem = _context.CartItems.Find(id);

            if (cartItem == null)
            {
                return NotFound();
            }

            return cartItem;
        }

        // POST: api/CartItems
        [HttpPost]
        public ActionResult<CartItem> PostCartItem(CartItem cartItem)
        {
            _context.CartItems.Add(cartItem);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetCartItem), new { id = cartItem.CartItemId }, cartItem);
        }

        // PUT: api/CartItems/5
        [HttpPut("{id}")]
        public IActionResult PutCartItem(int id, CartItem cartItem)
        {
            if (id != cartItem.CartItemId)
            {
                return BadRequest();
            }

            _context.Entry(cartItem).State = EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        // DELETE: api/CartItems/5
        [HttpDelete("{id}")]
        public ActionResult<CartItem> DeleteCartItem(int id)
        {
            var cartItem = _context.CartItems.Find(id);
            if (cartItem == null)
            {
                return NotFound();
            }

            _context.CartItems.Remove(cartItem);
            _context.SaveChanges();

            return cartItem;
        }
    }
}
