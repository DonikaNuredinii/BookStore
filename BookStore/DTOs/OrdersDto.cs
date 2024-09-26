using BookStore.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace BookStore.DTOs
{
    public class OrdersDto
    {
        public int OrdersId { get; set; }
        public DateTime OrderDate { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public int CountryID { get; set; }
        public string ZipCode { get; set; }
        public string Email { get; set; }
        public int? DiscountID { get; set; }
        public int? GiftCardID { get; set; }
        public PaymentDto Payment { get; set; }
        public OrderDetailsDto OrderDetails { get; set; }
        public int UserID { get; set; }
    }
}
