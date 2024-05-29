using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BookStore.Migrations
{
    /// <inheritdoc />
    public partial class BookA : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BookAuthors_Books_BookID",
                table: "BookAuthors");

            migrationBuilder.DropForeignKey(
                name: "FK_categoryBooks_Books_BookID",
                table: "categoryBooks");

            migrationBuilder.DropForeignKey(
                name: "FK_categoryBooks_Categories_CategoryID",
                table: "categoryBooks");

            migrationBuilder.DropIndex(
                name: "IX_categoryBooks_BookID",
                table: "categoryBooks");

            migrationBuilder.DropIndex(
                name: "IX_categoryBooks_CategoryID",
                table: "categoryBooks");

            migrationBuilder.DropIndex(
                name: "IX_BookAuthors_BookID",
                table: "BookAuthors");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_categoryBooks_BookID",
                table: "categoryBooks",
                column: "BookID");

            migrationBuilder.CreateIndex(
                name: "IX_categoryBooks_CategoryID",
                table: "categoryBooks",
                column: "CategoryID");

            migrationBuilder.CreateIndex(
                name: "IX_BookAuthors_BookID",
                table: "BookAuthors",
                column: "BookID");

            migrationBuilder.AddForeignKey(
                name: "FK_BookAuthors_Books_BookID",
                table: "BookAuthors",
                column: "BookID",
                principalTable: "Books",
                principalColumn: "BookID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_categoryBooks_Books_BookID",
                table: "categoryBooks",
                column: "BookID",
                principalTable: "Books",
                principalColumn: "BookID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_categoryBooks_Categories_CategoryID",
                table: "categoryBooks",
                column: "CategoryID",
                principalTable: "Categories",
                principalColumn: "CategoryId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
