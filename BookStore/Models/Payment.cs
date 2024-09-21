using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace BookStore.Models
{
    public class Payment
    {
        [Key]
        public int PaymentID { get; set; }

        [Required]
        [Column(TypeName = "decimal(18, 2)")]
        public decimal Amount { get; set; }

        [Required]
        public string PaymentMethod { get; set; }

        [StringLength(4)]
        public string? LastFourDigits { get; set; } 

        [ForeignKey("Orders")]
        public int OrdersId { get; set; }
        [JsonIgnore]
        public virtual Orders Orders { get; set; }

        public string? TransactionID { get; set; } 
    }
}
