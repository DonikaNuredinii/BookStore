using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
    public class LanguageBook
    {
        [Key]
        public int LanguageBookID { get; set; }

        [ForeignKey("Book")]
        public int BookID { get; set; }
        public Book Book { get; set; }

        [ForeignKey("Language")]
        public int LanguageID { get; set; }
        public Language Language { get; set; }
    }
}
