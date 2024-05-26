namespace BookStore.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        public String Genre { get; set; }
        public string CategoryDescription { get; set; }
        public DateTime CreatioDate { get; set; }
        public ICollection<CategoryBook> CategoryBooks { get; set; } // Shtimi i një koleksioni për lidhjet me librat
    }
}