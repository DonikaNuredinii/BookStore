namespace BookStore.DTOs
{
    public class CreatePaymentRequest
    {
        public decimal Amount { get; set; }
        public string PaymentMethodId { get; set; }
        public string PaymentMethod { get; set; }
        public string LastFourDigits { get; set; }
        public int OrdersId { get; set; }
    }
}
