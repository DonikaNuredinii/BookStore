using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
    public class BookAuthors
    {

        public int BookAuthorsID { get; set; }
        [ForeignKey("Book")]
        public int BookID { get; set; }

        [ForeignKey("Author")]
        public int AuthorID { get; set; }

        public Book Book { get; set; }
        public Author Author { get; set; }
    }
}
