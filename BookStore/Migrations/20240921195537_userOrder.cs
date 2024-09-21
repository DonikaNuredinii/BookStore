using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BookStore.Migrations
{
    /// <inheritdoc />
    public partial class userOrder : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserOrder_Orders_OrdersId",
                table: "UserOrder");

            migrationBuilder.DropForeignKey(
                name: "FK_UserOrder_Users_UserId",
                table: "UserOrder");

            migrationBuilder.DropIndex(
                name: "IX_UserOrder_OrdersId",
                table: "UserOrder");

            migrationBuilder.DropIndex(
                name: "IX_UserOrder_UserId",
                table: "UserOrder");
        }
    }
}
