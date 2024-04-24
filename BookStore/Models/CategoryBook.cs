using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
    public class CategoryBook
    {
        public int CategoryBookID { get; set; }
        [ForeignKey("Book")]
        public int BookID { get; set; }

        [ForeignKey("Category")]
        public int CategoryID { get; set; }

        public Book Book { get; set; }
        public Category Category { get; set; }
    }
}
