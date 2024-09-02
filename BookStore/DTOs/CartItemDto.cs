namespace BookStore.DTOs
{
    public class CartItemDto
    {
        public int Quantity { get; set; }
        public int? BookId { get; set; }
        public int? AccessoriesID { get; set; }
        public int? GiftCardId { get; set; }
    }

}
