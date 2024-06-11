using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
    public class OrderDetails
    {
        public int OrderDetailsID { get; set; }
        public decimal TotalPrice { get; set; }

        public int CartItemId { get; set; }
        public CartItem CartItem { get; set; }
    }
}
