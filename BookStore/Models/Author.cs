using System.Text.Json.Serialization;

namespace BookStore.Models
{
    public class Author
    {
        public int AuthorID { get; set; }
        public string Name { get; set; }
        public string DateOfBirth { get; set; }
        public string Biography { get; set; }
        public string Awards { get; set; }
        public string Genre { get; set; }

        [JsonIgnore]
        public ICollection<BookAuthors> BookAuthors { get; set; } = new HashSet<BookAuthors>();
    }
}
