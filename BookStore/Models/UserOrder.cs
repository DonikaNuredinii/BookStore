using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
    public class UserOrder
    {
        public int UserOrderId { get; set; }
        [ForeignKey("UserID")]
        public int UserId { get; set; }
        public virtual User User { get; set; } 

        [ForeignKey("Orders")]
        public int OrdersId { get; set; }
        public virtual Orders Orders { get; set; }
    }
}
