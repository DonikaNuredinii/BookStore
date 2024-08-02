using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
    public class CategoryBook
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CategoryBookID { get; set; }
        [ForeignKey("Book")]
        public int BookID { get; set; }

        [ForeignKey("Category")]
        public int CategoryID { get; set; }

        public Book Book { get; set; }
        public Category Category { get; set; }
    }
}
