namespace BookStore.Models
{
    public class AuthorQuotes
    {
        public int AuthorID { get; set; }
        public Author Author { get; set; }

        public int QuoteID { get; set; }
        public Quote Quote { get; set; }
    }
}
