using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
    public class GiftCard
    {
        public int GiftCardID { get; set; }

        public int Amount { get; set; }
        public string SelectedDesign { get; set; }
        public string RecipientName { get; set; }
        public string RecipientEmail { get; set; }
        public string Message { get; set; }
        [ForeignKey("UserID")]
        public int UserID { get; set; }
    }
}
