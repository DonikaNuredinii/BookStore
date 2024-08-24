namespace BookStore.Models
{
    public class Language
    {


        public int LanguageId { get; set; }

        public String LanguageName { get; set; }

        public ICollection<LanguageCategory> LanguageCategories { get; set; } = new HashSet<LanguageCategory>();
    }
}