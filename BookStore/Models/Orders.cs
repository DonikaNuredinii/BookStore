using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

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
        [JsonIgnore]
        public virtual Payment Payment { get; set; }
        [ForeignKey("OrderDetails")]
        public int OrderDetailsID { get; set; }
        public virtual OrderDetails OrderDetails { get; set; }
    }
}
