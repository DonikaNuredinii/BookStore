using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BookStore.Migrations
{
    /// <inheritdoc />
    public partial class Ebookupdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EbookLoans_Ebooks_EbookID",
                table: "EbookLoans");

            migrationBuilder.DropForeignKey(
                name: "FK_EbookLoans_Users_UserID",
                table: "EbookLoans");

            migrationBuilder.AddColumn<int>(
                name: "EbookBookID",
                table: "EbookLoans",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_EbookLoans_EbookBookID",
                table: "EbookLoans",
                column: "EbookBookID");

            migrationBuilder.AddForeignKey(
                name: "FK_EbookLoans_Ebooks_EbookBookID",
                table: "EbookLoans",
                column: "EbookBookID",
                principalTable: "Ebooks",
                principalColumn: "BookID");

            migrationBuilder.AddForeignKey(
                name: "FK_EbookLoans_Ebooks_EbookID",
                table: "EbookLoans",
                column: "EbookID",
                principalTable: "Ebooks",
                principalColumn: "BookID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_EbookLoans_Users_UserID",
                table: "EbookLoans",
                column: "UserID",
                principalTable: "Users",
                principalColumn: "UserID",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EbookLoans_Ebooks_EbookBookID",
                table: "EbookLoans");

            migrationBuilder.DropForeignKey(
                name: "FK_EbookLoans_Ebooks_EbookID",
                table: "EbookLoans");

            migrationBuilder.DropForeignKey(
                name: "FK_EbookLoans_Users_UserID",
                table: "EbookLoans");

            migrationBuilder.DropIndex(
                name: "IX_EbookLoans_EbookBookID",
                table: "EbookLoans");

            migrationBuilder.DropColumn(
                name: "EbookBookID",
                table: "EbookLoans");

            migrationBuilder.AddForeignKey(
                name: "FK_EbookLoans_Ebooks_EbookID",
                table: "EbookLoans",
                column: "EbookID",
                principalTable: "Ebooks",
                principalColumn: "BookID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_EbookLoans_Users_UserID",
                table: "EbookLoans",
                column: "UserID",
                principalTable: "Users",
                principalColumn: "UserID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
