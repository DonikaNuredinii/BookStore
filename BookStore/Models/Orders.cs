using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
    public class Orders
    {
        public int OrdersId { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime OrderShipDate { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        [ForeignKey("CountryID")]
        public int CountryID { get; set; }
        public int ZipCode { get; set; }
        [ForeignKey("DiscountID")]
        public int DiscountID { get; set; }
        [ForeignKey("GiftCardID")]
        public int GiftCardID { get; set; }


    }
}