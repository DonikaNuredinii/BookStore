using Microsoft.EntityFrameworkCore;

namespace BookStore.Models
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions options) : base(options)
        {


        }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<PublishingHouse> PublishingHouses { get; set; }
        public DbSet<CategoryBook> categoryBooks { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Roles> Roles { get; set; }
        public DbSet<Stock> Stock { get; set; }

    }
}