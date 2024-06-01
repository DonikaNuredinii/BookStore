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
        public DbSet<OrderDetails> OrderDetails { get; set; }
        public DbSet<Payment> Payment{ get; set; }
        public DbSet<UserOrder> UserOrder { get; set; }
        public DbSet<Discount> Discount { get; set; }
        public DbSet<Country> Countries { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Book>()
                .Property(b => b.Price)
                .HasColumnType("decimal(18,2)");

            modelBuilder.Entity<Accessories>()
                .Property(a => a.Price)
                .HasColumnType("decimal(18,2)");
            modelBuilder.Entity<User>()
                .Property(u => u.RolesID);
            modelBuilder.Entity<Discount>()
        .Property(d => d.DiscountAmount)
        .HasColumnType("decimal(18,2)");

            modelBuilder.Entity<OrderDetails>()
                .Property(o => o.TotalPrice)
                .HasColumnType("decimal(18,2)");

            modelBuilder.Entity<Payment>()
                .Property(p => p.Amount)
                .HasColumnType("decimal(18,2)");

            modelBuilder.Entity<User>()
                .HasOne<Roles>()
                .WithMany()
                .HasForeignKey(u => u.RolesID);

            modelBuilder.Entity<Roles>().HasData(
                new Roles { RolesID = 2, RoleName = "User" },
                new Roles { RolesID = 3, RoleName = "Admin" }
            );
            modelBuilder.Entity<Book>()
                .HasOne<PublishingHouse>()
                .WithMany()
                .HasForeignKey(b => b.PublishingHouseId);

            modelBuilder.Entity<Book>()
                .HasOne<Stock>()
                .WithMany()
                .HasForeignKey(b => b.StockId);

            base.OnModelCreating(modelBuilder);
        }
    }
}
       