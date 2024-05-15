using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
    public class Stock
    {
        public int StockId { get; set; }

        public int Quantity { get; set;}

        public int BookID { get; set; }
        [ForeignKey("BookID")]

        public Book Book { get; set; }  
    }

}
