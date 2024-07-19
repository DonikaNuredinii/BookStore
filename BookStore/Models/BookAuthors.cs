using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
    public class BookAuthors
    {

        public int BookAuthorsID { get; set; }
        public int BookID { get; set; }
        public Book Book { get; set; }

        public int AuthorID { get; set; }
        public Author Author { get; set; }
    }
}
