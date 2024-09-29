namespace BookStore.DTOs
{
    public class PaymentDto
    {
        public decimal Amount { get; set; }
        public string PaymentMethod { get; set; }
        public string?LastFourDigits { get; set; }
        public string? TransactionID { get; set; }
    }
}
