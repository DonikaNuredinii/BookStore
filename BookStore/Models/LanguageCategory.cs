using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
    public class LanguageCategory
    {
        [Key]

        public int LanguageCategoryID { get; set; } 
       
        
        [ForeignKey("Language")]
        public int LanguageId { get; set; } 
        public Language Language { get; set; }

        [ForeignKey("Category")]
        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
