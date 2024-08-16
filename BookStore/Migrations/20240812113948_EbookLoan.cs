using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BookStore.Migrations
{
    /// <inheritdoc />
    public partial class EbookLoan : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Content",
                table: "Books",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "Books",
                type: "nvarchar(5)",
                maxLength: 5,
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "EbookLoans",
                columns: table => new
                {
                    EbookLoanID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EbookID = table.Column<int>(type: "int", nullable: false),
                    LoanStartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LoanDueDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserID = table.Column<int>(type: "int", nullable: false),
                    IsReturned = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EbookLoans", x => x.EbookLoanID);
                    table.ForeignKey(
                        name: "FK_EbookLoans_Books_EbookID",
                        column: x => x.EbookID,
                        principalTable: "Books",
                        principalColumn: "BookID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EbookLoans_Users_UserID",
                        column: x => x.UserID,
                        principalTable: "Users",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EbookLoans_EbookID",
                table: "EbookLoans",
                column: "EbookID");

            migrationBuilder.CreateIndex(
                name: "IX_EbookLoans_UserID",
                table: "EbookLoans",
                column: "UserID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EbookLoans");

            migrationBuilder.DropColumn(
                name: "Content",
                table: "Books");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "Books");
        }
    }
}
