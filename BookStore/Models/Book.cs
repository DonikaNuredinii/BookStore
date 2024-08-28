using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace BookStore.Models
{
    public class Book
    {
        public int BookID { get; set; }
        public string ISBN { get; set; }
        public string Image { get; set; }
        public string Title { get; set; }
        public DateTime PublicationDate { get; set; }
        public int PageNumber { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public DateTime DateOfadition { get; set; }
        public string Type { get; set; }
        [ForeignKey("PublishingHouse")]
        public int PublishingHouseId { get; set; }

        [ForeignKey("Stock")]
        public int StockId { get; set; }
        [JsonIgnore]
        public ICollection<BookAuthors> BookAuthors { get; set; } = new HashSet<BookAuthors>();

        [JsonIgnore]
        public ICollection<CategoryBook> CategoryBooks { get; set; } = new HashSet<CategoryBook>();

        [JsonIgnore]
        public ICollection<LanguageBook> LanguageBooks { get; set; } = new HashSet<LanguageBook>();

    }
}
