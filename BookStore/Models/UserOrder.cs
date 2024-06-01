using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
    public class UserOrder
    {
        public int UserOrderId { get; set; }
        [ForeignKey("UserID")]
        public int UserId { get; set; }
        [ForeignKey("OrdersId")]
        public int OrdersId { get; set; }
    }
}
