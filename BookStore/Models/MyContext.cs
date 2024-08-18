using Microsoft.EntityFrameworkCore;

namespace BookStore.Models
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions<MyContext> options) : base(options) { }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<PublishingHouse> PublishingHouses { get; set; }
        public DbSet<CategoryBook> CategoryBooks { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<ContactUs> Contact { get; set; }
        public DbSet<Roles> Roles { get; set; }
        public DbSet<Stock> Stock { get; set; }
        public DbSet<Author> Author { get; set; }
        public DbSet<BookAuthors> BookAuthors { get; set; }
        public DbSet<Orders> Orders { get; set; }
        public DbSet<GiftCard> GiftCards { get; set; }
        public DbSet<Accessories> Accessories { get; set; }
        public DbSet<OrderDetails> OrderDetails { get; set; }
        public DbSet<Payment> Payment { get; set; }
        public DbSet<UserOrder> UserOrder { get; set; }
        public DbSet<Discount> Discount { get; set; }
        public DbSet<Country> Countries { get; set; }
        public DbSet<CartItem> CartItems { get; set; }
        public DbSet<Ebook> Ebooks { get; set; }
        public DbSet<EbookLoan> EbookLoans { get; set; }
        public DbSet<Quote> Quotes { get; set; }
        public DbSet<AuthorQuotes> AuthorQuotes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Book>()
                .Property(b => b.Price)
                .HasColumnType("decimal(18,2)");

            modelBuilder.Entity<Accessories>()
                .Property(a => a.Price)
                .HasColumnType("decimal(18,2)");

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

            modelBuilder.Entity<BookAuthors>()
                .HasKey(ba => ba.BookAuthorsID);

            modelBuilder.Entity<BookAuthors>()
                .HasOne(ba => ba.Book)
                .WithMany(b => b.BookAuthors)
                .HasForeignKey(ba => ba.BookID);

            modelBuilder.Entity<BookAuthors>()
                .HasOne(ba => ba.Author)
                .WithMany(a => a.BookAuthors)
                .HasForeignKey(ba => ba.AuthorID);

            modelBuilder.Entity<CategoryBook>()
               .HasKey(cb => new { cb.BookID, cb.CategoryID });

            modelBuilder.Entity<CategoryBook>()
                .HasOne(cb => cb.Book)
                .WithMany(b => b.CategoryBooks)
                .HasForeignKey(cb => cb.BookID);

            modelBuilder.Entity<CategoryBook>()
                .HasOne(cb => cb.Category)
                .WithMany(c => c.CategoryBooks)
                .HasForeignKey(cb => cb.CategoryID);

            modelBuilder.Entity<Book>()
                .ToTable("Books");

            modelBuilder.Entity<Ebook>()
                .ToTable("Ebooks");

            modelBuilder.Entity<EbookLoan>()
                .HasOne(p => p.Ebook)
                .WithMany(b => b.EbookLoans)
                .HasForeignKey(p => p.EbookID);

            modelBuilder.Entity<EbookLoan>()
                .HasOne(el => el.User)
                .WithMany()
                .HasForeignKey(el => el.UserID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<AuthorQuotes>()
               .HasKey(aq => new { aq.AuthorID, aq.QuoteID });

            modelBuilder.Entity<AuthorQuotes>()
                .HasOne(aq => aq.Author)
                .WithMany(a => a.AuthorQuotes)
                .HasForeignKey(aq => aq.AuthorID);

            modelBuilder.Entity<AuthorQuotes>()
                .HasOne(aq => aq.Quote)
                .WithMany(q => q.AuthorQuotes)
                .HasForeignKey(aq => aq.QuoteID);



            base.OnModelCreating(modelBuilder);
        }
    }
}
