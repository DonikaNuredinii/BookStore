namespace BookStore.DTOs
{
    public class CreatePaymentRequest
    {
        public int OrdersID { get; set; }
        public decimal Amount { get; set; }
        public string PaymentMethod { get; set; }
        public string PaymentMethodId { get; set; }
    }
}
