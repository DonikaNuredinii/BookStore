using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace BookStore.Models
{
    public class CartItem
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CartItemId { get; set; }
        public int Quantity { get; set; }

        [ForeignKey("Book")]
        public int? BookId { get; set; }
        [JsonIgnore]
        public virtual Book Book { get; set; }

        [ForeignKey("Accessories")]
        public int? AccessoriesID { get; set; }
        [JsonIgnore]
        public virtual Accessories Accessories { get; set; }

        [ForeignKey("GiftCard")]
        public int? GiftCardId { get; set; }
        [JsonIgnore]
        public virtual GiftCard GiftCard { get; set; }
    }
}
