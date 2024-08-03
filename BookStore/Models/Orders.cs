using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace BookStore.Models
{
    public class Orders
    {
        [Key]
        public int OrdersId { get; set; }

        [DataType(DataType.Date)]
        public DateTime OrderDate { get; set; }

        [DataType(DataType.Date)]
        public DateTime OrderShipDate { get; set; }

        public string Address { get; set; }
        public string City { get; set; }

        [ForeignKey("CountryID")]
        public int CountryID { get; set; }
        public virtual Country Country { get; set; } 

        public int ZipCode { get; set; }

        [ForeignKey("DiscountID")]
        public int? DiscountID { get; set; }
        public virtual Discount Discount { get; set; } 

        [ForeignKey("GiftCardID")]
        public int? GiftCardID { get; set; }
        public virtual GiftCard GiftCard { get; set; } // Assuming a GiftCard class exists

        public virtual ICollection<OrderDetails> OrderDetails { get; set; } = new HashSet<OrderDetails>();
    }
}
