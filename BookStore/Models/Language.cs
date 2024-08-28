using System.Text.Json.Serialization;

namespace BookStore.Models
{
    public class Language
    {


        public int LanguageId { get; set; }

        public String LanguageName { get; set; }

        [JsonIgnore]
        public ICollection<LanguageCategory> LanguageCategories { get; set; } = new HashSet<LanguageCategory>();

        [JsonIgnore]
        public ICollection<LanguageBook> LanguageBooks { get; set; } = new HashSet<LanguageBook>();
    }
}