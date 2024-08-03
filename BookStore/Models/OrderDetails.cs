using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace BookStore.Models
{
    public class OrderDetails
    {
        [Key]
        public int OrderDetailsID { get; set; }

        [Required]
        [DataType(DataType.Currency)]
        public decimal TotalPrice { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime InvoiceDate { get; set; }

        [Required]
        public string InvoiceNumber { get; set; }

        [JsonIgnore]
        public virtual ICollection<Orders> Orders { get; set; } = new HashSet<Orders>();

        [ForeignKey("CartItemId")]
        public virtual CartItem CartItem { get; set; }
    }
}
