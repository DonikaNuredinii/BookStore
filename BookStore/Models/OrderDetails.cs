using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
    public class OrderDetails
    {
        public int OrderDetailsID { get; set; }
        public int Quantity { get; set; }
        public decimal TotalPrice { get; set; }
        [ForeignKey("OrdersId")]
        public int OrdersId { get; set; }
        [ForeignKey("BookID")]
        public int BookID { get; set; }
        [ForeignKey("AccessoriesID")]
        public int AccessoriesID { get; set; }

    }
}
