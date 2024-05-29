using System.Collections.Generic;
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
        public DbSet<Author> Author { get; set; }
        public DbSet<BookAuthors> BookAuthors { get; set; }
        public DbSet<Orders> Orders { get; set; }
        public DbSet<GiftCard> GiftCards { get; set; }
        public DbSet<Accessories> Accessories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Book>()
                .Property(b => b.Price)
                .HasColumnType("decimal(18,2)");

            modelBuilder.Entity<Accessories>()
                .Property(a => a.Price)
                .HasColumnType("decimal(18,2)");

            base.OnModelCreating(modelBuilder);
        }
    }
}