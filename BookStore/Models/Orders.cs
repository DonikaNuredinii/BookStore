namespace BookStore.Models
{
    public class Orders
    {
        public int OrdersId { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime OrderShipDate { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public int ZipCode { get; set; }
        public int DiscountId { get; set; }

    }
}