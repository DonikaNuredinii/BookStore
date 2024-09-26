namespace BookStore.DTOs
{
    public class OrderDetailsDto
    {
        public decimal TotalPrice { get; set; }
        public DateTime InvoiceDate { get; set; }
        public DateTime? OrderShipDate { get; set; }
        public string InvoiceNumber { get; set; }
        public List<int> CartItemIds { get; set; }
    }
}
