using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
    public class Orders
    {
        [Key]

        public int OrdersId { get; set; }

        [DataType(DataType.Date)]
        public DateTime OrderDate { get; set; }

        [DataType(DataType.Date)]
        public DateTime? OrderShipDate { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
  
        public string City { get; set; }

        [ForeignKey("Country")]
        public int CountryID { get; set; }
        public virtual Country Country { get; set; }

        [Required]
        public string ZipCode { get; set; }

        [ForeignKey("Discount")]
        public int? DiscountID { get; set; }
        public virtual Discount Discount { get; set; }

        [ForeignKey("GiftCard")]
        public int? GiftCardID { get; set; }
        public virtual GiftCard GiftCard { get; set; }

        public virtual ICollection<OrderDetails> OrderDetails { get; set; } = new HashSet<OrderDetails>();
    }
}
