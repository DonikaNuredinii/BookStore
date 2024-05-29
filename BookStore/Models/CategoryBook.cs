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

        public virtual Book Book { get; set; }
        public virtual Category Category { get; set; }
    }
}
