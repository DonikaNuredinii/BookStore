using BookStore.Models;

namespace BookStore.DTOs
{
    public class BookResponse
    {
        public Book Book { get; set; }
        public ICollection<Author> Authors { get; set; }
        public ICollection<Category> Categories { get; set; }
    }
}
