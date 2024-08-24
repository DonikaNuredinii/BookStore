namespace BookStore.Models
{
    public class LanguageCategory
    {
        public int LanguageCategoryID { get; set; } 
        public int LanguageId { get; set; } 
        public int CategoryId { get; set; } 

        public Language Language { get; set; }
        public Category Category { get; set; }
    }
}
