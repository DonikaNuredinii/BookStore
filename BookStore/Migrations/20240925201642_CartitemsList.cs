using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BookStore.Migrations
{
    /// <inheritdoc />
    public partial class CartitemsList : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderDetails_CartItems_CartItemId",
                table: "OrderDetails");

            migrationBuilder.DropIndex(
                name: "IX_OrderDetails_CartItemId",
                table: "OrderDetails");

            migrationBuilder.DropColumn(
                name: "CartItemId",
                table: "OrderDetails");

            migrationBuilder.AddColumn<string>(
                name: "CartItemIds",
                table: "OrderDetails",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "[]");

            migrationBuilder.AddColumn<int>(
                name: "OrderDetailsID",
                table: "CartItems",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_CartItems_OrderDetailsID",
                table: "CartItems",
                column: "OrderDetailsID");

            migrationBuilder.AddForeignKey(
                name: "FK_CartItems_OrderDetails_OrderDetailsID",
                table: "CartItems",
                column: "OrderDetailsID",
                principalTable: "OrderDetails",
                principalColumn: "OrderDetailsID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CartItems_OrderDetails_OrderDetailsID",
                table: "CartItems");

            migrationBuilder.DropIndex(
                name: "IX_CartItems_OrderDetailsID",
                table: "CartItems");

            migrationBuilder.DropColumn(
                name: "CartItemIds",
                table: "OrderDetails");

            migrationBuilder.DropColumn(
                name: "OrderDetailsID",
                table: "CartItems");

            migrationBuilder.AddColumn<int>(
                name: "CartItemId",
                table: "OrderDetails",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_OrderDetails_CartItemId",
                table: "OrderDetails",
                column: "CartItemId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderDetails_CartItems_CartItemId",
                table: "OrderDetails",
                column: "CartItemId",
                principalTable: "CartItems",
                principalColumn: "CartItemId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
