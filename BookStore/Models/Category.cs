using System.Text.Json.Serialization;

namespace BookStore.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        public String Genre { get; set; }
        public string CategoryDescription { get; set; }
        public DateTime CreatioDate { get; set; }
        [JsonIgnore]
        public ICollection<CategoryBook> CategoryBooks { get; set; } = new HashSet<CategoryBook>();

    }
}