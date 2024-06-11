using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BookStore.Migrations
{
    /// <inheritdoc />
    public partial class cart : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AccessoriesID",
                table: "OrderDetails");

            migrationBuilder.DropColumn(
                name: "BookID",
                table: "OrderDetails");

            migrationBuilder.DropColumn(
                name: "GiftCardID",
                table: "OrderDetails");

            migrationBuilder.RenameColumn(
                name: "Quantity",
                table: "OrderDetails",
                newName: "CartItemId");

            migrationBuilder.CreateTable(
                name: "CartItems",
                columns: table => new
                {
                    CartItemId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Quantity = table.Column<int>(type: "int", nullable: false),
                    BookId = table.Column<int>(type: "int", nullable: true),
                    AccessoriesId = table.Column<int>(type: "int", nullable: true),
                    GiftCardId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CartItems", x => x.CartItemId);
                    table.ForeignKey(
                        name: "FK_CartItems_Accessories_AccessoriesId",
                        column: x => x.AccessoriesId,
                        principalTable: "Accessories",
                        principalColumn: "AccessoriesID");
                    table.ForeignKey(
                        name: "FK_CartItems_Books_BookId",
                        column: x => x.BookId,
                        principalTable: "Books",
                        principalColumn: "BookID");
                    table.ForeignKey(
                        name: "FK_CartItems_GiftCards_GiftCardId",
                        column: x => x.GiftCardId,
                        principalTable: "GiftCards",
                        principalColumn: "GiftCardID");
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrderDetails_CartItemId",
                table: "OrderDetails",
                column: "CartItemId");

            migrationBuilder.CreateIndex(
                name: "IX_CartItems_AccessoriesId",
                table: "CartItems",
                column: "AccessoriesId");

            migrationBuilder.CreateIndex(
                name: "IX_CartItems_BookId",
                table: "CartItems",
                column: "BookId");

            migrationBuilder.CreateIndex(
                name: "IX_CartItems_GiftCardId",
                table: "CartItems",
                column: "GiftCardId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderDetails_CartItems_CartItemId",
                table: "OrderDetails",
                column: "CartItemId",
                principalTable: "CartItems",
                principalColumn: "CartItemId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderDetails_CartItems_CartItemId",
                table: "OrderDetails");

            migrationBuilder.DropTable(
                name: "CartItems");

            migrationBuilder.DropIndex(
                name: "IX_OrderDetails_CartItemId",
                table: "OrderDetails");

            migrationBuilder.RenameColumn(
                name: "CartItemId",
                table: "OrderDetails",
                newName: "Quantity");

            migrationBuilder.AddColumn<int>(
                name: "AccessoriesID",
                table: "OrderDetails",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "BookID",
                table: "OrderDetails",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "GiftCardID",
                table: "OrderDetails",
                type: "int",
                nullable: true);
        }
    }
}
