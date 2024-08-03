using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
    public class CartItem
    {
     
            public int CartItemId { get; set; }
            public int Quantity { get; set; }

        [ForeignKey("Book")]
        public int? BookId { get; set; }

        [ForeignKey("Accessories")]
        public int? AccessoriesID { get; set; }
 

        [ForeignKey("GiftCard")]
        public int? GiftCardId { get; set; }


    }
}
