﻿// <auto-generated />
using System;
using BookStore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace BookStore.Migrations
{
    [DbContext(typeof(MyContext))]
    [Migration("20240816124059_Ebooks")]
    partial class Ebooks
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("BookStore.Models.Accessories", b =>
                {
                    b.Property<int>("AccessoriesID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("AccessoriesID"));

                    b.Property<DateTime>("DateofAddition")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Dimensions")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("Seller")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("StockId")
                        .HasColumnType("int");

                    b.HasKey("AccessoriesID");

                    b.ToTable("Accessories");
                });

            modelBuilder.Entity("BookStore.Models.Author", b =>
                {
                    b.Property<int>("AuthorID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("AuthorID"));

                    b.Property<string>("Awards")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Biography")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DateOfBirth")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Genre")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("AuthorID");

                    b.ToTable("Author");
                });

            modelBuilder.Entity("BookStore.Models.Book", b =>
                {
                    b.Property<int>("BookID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("BookID"));

                    b.Property<DateTime>("DateOfadition")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ISBN")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PageNumber")
                        .HasColumnType("int");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,2)");

                    b.Property<DateTime>("PublicationDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("PublishingHouseId")
                        .HasColumnType("int");

                    b.Property<int>("StockId")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("BookID");

                    b.HasIndex("PublishingHouseId");

                    b.HasIndex("StockId");

                    b.ToTable("Books", (string)null);

                    b.UseTptMappingStrategy();
                });

            modelBuilder.Entity("BookStore.Models.BookAuthors", b =>
                {
                    b.Property<int>("BookAuthorsID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("BookAuthorsID"));

                    b.Property<int>("AuthorID")
                        .HasColumnType("int");

                    b.Property<int>("BookID")
                        .HasColumnType("int");

                    b.HasKey("BookAuthorsID");

                    b.HasIndex("AuthorID");

                    b.HasIndex("BookID");

                    b.ToTable("BookAuthors");
                });

            modelBuilder.Entity("BookStore.Models.CartItem", b =>
                {
                    b.Property<int>("CartItemId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CartItemId"));

                    b.Property<int?>("AccessoriesID")
                        .HasColumnType("int");

                    b.Property<int?>("BookId")
                        .HasColumnType("int");

                    b.Property<int?>("GiftCardId")
                        .HasColumnType("int");

                    b.Property<int>("Quantity")
                        .HasColumnType("int");

                    b.HasKey("CartItemId");

                    b.ToTable("CartItems");
                });

            modelBuilder.Entity("BookStore.Models.Category", b =>
                {
                    b.Property<int>("CategoryId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CategoryId"));

                    b.Property<string>("CategoryDescription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("CreatioDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Genre")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CategoryId");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("BookStore.Models.CategoryBook", b =>
                {
                    b.Property<int>("BookID")
                        .HasColumnType("int");

                    b.Property<int>("CategoryID")
                        .HasColumnType("int");

                    b.Property<int>("CategoryBookID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CategoryBookID"));

                    b.HasKey("BookID", "CategoryID");

                    b.HasIndex("CategoryID");

                    b.ToTable("CategoryBooks");
                });

            modelBuilder.Entity("BookStore.Models.ContactUs", b =>
                {
                    b.Property<int>("ContactID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ContactID"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Message")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ContactID");

                    b.ToTable("Contact");
                });

            modelBuilder.Entity("BookStore.Models.Country", b =>
                {
                    b.Property<int>("CountryID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CountryID"));

                    b.Property<string>("CountryName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CountryID");

                    b.ToTable("Countries");
                });

            modelBuilder.Entity("BookStore.Models.Discount", b =>
                {
                    b.Property<int>("DiscountID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("DiscountID"));

                    b.Property<decimal>("DiscountAmount")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("DiscountID");

                    b.ToTable("Discount");
                });

            modelBuilder.Entity("BookStore.Models.EbookLoan", b =>
                {
                    b.Property<int>("EbookLoanID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("EbookLoanID"));

                    b.Property<int>("EbookID")
                        .HasColumnType("int");

                    b.Property<bool>("IsReturned")
                        .HasColumnType("bit");

                    b.Property<DateTime>("LoanDueDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("LoanStartDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("UserID")
                        .HasColumnType("int");

                    b.HasKey("EbookLoanID");

                    b.HasIndex("EbookID");

                    b.HasIndex("UserID");

                    b.ToTable("EbookLoans");
                });

            modelBuilder.Entity("BookStore.Models.GiftCard", b =>
                {
                    b.Property<int>("GiftCardID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("GiftCardID"));

                    b.Property<int>("Amount")
                        .HasColumnType("int");

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("Message")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RecipientEmail")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RecipientName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SelectedDesign")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserID")
                        .HasColumnType("int");

                    b.HasKey("GiftCardID");

                    b.ToTable("GiftCards");
                });

            modelBuilder.Entity("BookStore.Models.OrderDetails", b =>
                {
                    b.Property<int>("OrderDetailsID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("OrderDetailsID"));

                    b.Property<int>("CartItemId")
                        .HasColumnType("int");

                    b.Property<DateTime>("InvoiceDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("InvoiceNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("TotalPrice")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("OrderDetailsID");

                    b.HasIndex("CartItemId");

                    b.ToTable("OrderDetails");
                });

            modelBuilder.Entity("BookStore.Models.Orders", b =>
                {
                    b.Property<int>("OrdersId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("OrdersId"));

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("CountryID")
                        .HasColumnType("int");

                    b.Property<int?>("DiscountID")
                        .HasColumnType("int");

                    b.Property<int?>("GiftCardID")
                        .HasColumnType("int");

                    b.Property<DateTime>("OrderDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("OrderShipDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("ZipCode")
                        .HasColumnType("int");

                    b.HasKey("OrdersId");

                    b.HasIndex("CountryID");

                    b.HasIndex("DiscountID");

                    b.HasIndex("GiftCardID");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("BookStore.Models.Payment", b =>
                {
                    b.Property<int>("PaymentID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PaymentID"));

                    b.Property<decimal>("Amount")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("CVV")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CardNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ExpiryDate")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("OrdersId")
                        .HasColumnType("int");

                    b.Property<string>("PaymentMethod")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("PaymentID");

                    b.ToTable("Payment");
                });

            modelBuilder.Entity("BookStore.Models.PublishingHouse", b =>
                {
                    b.Property<int>("PublishingHouseId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PublishingHouseId"));

                    b.Property<string>("HouseName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("PublishingHouseId");

                    b.ToTable("PublishingHouses");
                });

            modelBuilder.Entity("BookStore.Models.Roles", b =>
                {
                    b.Property<int>("RolesID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("RolesID"));

                    b.Property<string>("RoleName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("RolesID");

                    b.ToTable("Roles");

                    b.HasData(
                        new
                        {
                            RolesID = 2,
                            RoleName = "User"
                        },
                        new
                        {
                            RolesID = 3,
                            RoleName = "Admin"
                        });
                });

            modelBuilder.Entity("BookStore.Models.Stock", b =>
                {
                    b.Property<int>("StockId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("StockId"));

                    b.Property<int>("Quantity")
                        .HasColumnType("int");

                    b.HasKey("StockId");

                    b.ToTable("Stock");
                });

            modelBuilder.Entity("BookStore.Models.User", b =>
                {
                    b.Property<int>("UserID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserID"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RolesID")
                        .HasColumnType("int");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserID");

                    b.HasIndex("RolesID");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("BookStore.Models.UserOrder", b =>
                {
                    b.Property<int>("UserOrderId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserOrderId"));

                    b.Property<int>("OrdersId")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("UserOrderId");

                    b.ToTable("UserOrder");
                });

            modelBuilder.Entity("OrderDetailsOrders", b =>
                {
                    b.Property<int>("OrderDetailsID")
                        .HasColumnType("int");

                    b.Property<int>("OrdersId")
                        .HasColumnType("int");

                    b.HasKey("OrderDetailsID", "OrdersId");

                    b.HasIndex("OrdersId");

                    b.ToTable("OrderDetailsOrders");
                });

            modelBuilder.Entity("Ebook", b =>
                {
                    b.HasBaseType("BookStore.Models.Book");

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.ToTable("Ebooks", (string)null);
                });

            modelBuilder.Entity("BookStore.Models.Book", b =>
                {
                    b.HasOne("BookStore.Models.PublishingHouse", null)
                        .WithMany()
                        .HasForeignKey("PublishingHouseId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("BookStore.Models.Stock", null)
                        .WithMany()
                        .HasForeignKey("StockId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("BookStore.Models.BookAuthors", b =>
                {
                    b.HasOne("BookStore.Models.Author", "Author")
                        .WithMany("BookAuthors")
                        .HasForeignKey("AuthorID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("BookStore.Models.Book", "Book")
                        .WithMany("BookAuthors")
                        .HasForeignKey("BookID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Author");

                    b.Navigation("Book");
                });

            modelBuilder.Entity("BookStore.Models.CategoryBook", b =>
                {
                    b.HasOne("BookStore.Models.Book", "Book")
                        .WithMany("CategoryBooks")
                        .HasForeignKey("BookID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("BookStore.Models.Category", "Category")
                        .WithMany("CategoryBooks")
                        .HasForeignKey("CategoryID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Book");

                    b.Navigation("Category");
                });

            modelBuilder.Entity("BookStore.Models.EbookLoan", b =>
                {
                    b.HasOne("Ebook", "Ebook")
                        .WithMany("EbookLoans")
                        .HasForeignKey("EbookID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("BookStore.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Ebook");

                    b.Navigation("User");
                });

            modelBuilder.Entity("BookStore.Models.OrderDetails", b =>
                {
                    b.HasOne("BookStore.Models.CartItem", "CartItem")
                        .WithMany()
                        .HasForeignKey("CartItemId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CartItem");
                });

            modelBuilder.Entity("BookStore.Models.Orders", b =>
                {
                    b.HasOne("BookStore.Models.Country", "Country")
                        .WithMany()
                        .HasForeignKey("CountryID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("BookStore.Models.Discount", "Discount")
                        .WithMany()
                        .HasForeignKey("DiscountID");

                    b.HasOne("BookStore.Models.GiftCard", "GiftCard")
                        .WithMany()
                        .HasForeignKey("GiftCardID");

                    b.Navigation("Country");

                    b.Navigation("Discount");

                    b.Navigation("GiftCard");
                });

            modelBuilder.Entity("BookStore.Models.User", b =>
                {
                    b.HasOne("BookStore.Models.Roles", null)
                        .WithMany()
                        .HasForeignKey("RolesID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("OrderDetailsOrders", b =>
                {
                    b.HasOne("BookStore.Models.OrderDetails", null)
                        .WithMany()
                        .HasForeignKey("OrderDetailsID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("BookStore.Models.Orders", null)
                        .WithMany()
                        .HasForeignKey("OrdersId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Ebook", b =>
                {
                    b.HasOne("BookStore.Models.Book", null)
                        .WithOne()
                        .HasForeignKey("Ebook", "BookID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("BookStore.Models.Author", b =>
                {
                    b.Navigation("BookAuthors");
                });

            modelBuilder.Entity("BookStore.Models.Book", b =>
                {
                    b.Navigation("BookAuthors");

                    b.Navigation("CategoryBooks");
                });

            modelBuilder.Entity("BookStore.Models.Category", b =>
                {
                    b.Navigation("CategoryBooks");
                });

            modelBuilder.Entity("Ebook", b =>
                {
                    b.Navigation("EbookLoans");
                });
#pragma warning restore 612, 618
        }
    }
}
