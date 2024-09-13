namespace BookStore.DTOs
{
    public class CreatePaymentRequest
    {
        public string Address { get; set; }
        public string City { get; set; }
        public int CountryID { get; set; }
        public string ZipCode { get; set; }
        public int? DiscountID { get; set; }
        public int? GiftCardID { get; set; }
        public decimal Amount { get; set; }
        public string PaymentMethodId { get; set; }
        public string PaymentMethod { get; set; }
        public string? LastFourDigits { get; set; }
        public List<CartItemDto> CartItems { get; set; }
    }
}
