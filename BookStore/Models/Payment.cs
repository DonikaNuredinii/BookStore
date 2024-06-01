using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
    public class Payment
    {
        public int PaymentID { get; set; }
        public decimal Amount { get; set; }
        public string PaymentMethod { get; set; }
        public string CardNumber { get; set; }
        public string ExpiryDate { get; set; }
        public string CVV { get; set; }


        [ForeignKey("OrdersId")]
        public int OrdersId { get; set; }
        
    }
}
