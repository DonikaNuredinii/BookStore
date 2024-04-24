using Microsoft.EntityFrameworkCore;

namespace BookStore.Models
{
    public class CategoriesContext : DbContext
    {
        public CategoriesContext(DbContextOptions<CategoriesContext> options) : base(options)
        {


        }
        public DbSet<Category> Categories { get; set; }

    }
}