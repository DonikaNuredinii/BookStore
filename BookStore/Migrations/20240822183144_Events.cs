using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BookStore.Migrations
{
    /// <inheritdoc />
    public partial class Events : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
 

            migrationBuilder.RenameTable(
                name: "Contact",
                newName: "Contacts");

            migrationBuilder.AddColumn<int>(
                name: "EventsID",
                table: "Author",
                type: "int",
                nullable: true);


            migrationBuilder.CreateTable(
                name: "Events",
                columns: table => new
                {
                    EventsID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EventName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Location = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Time = table.Column<TimeSpan>(type: "time", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Events", x => x.EventsID);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Author_EventsID",
                table: "Author",
                column: "EventsID");

            migrationBuilder.AddForeignKey(
                name: "FK_Author_Events_EventsID",
                table: "Author",
                column: "EventsID",
                principalTable: "Events",
                principalColumn: "EventsID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Author_Events_EventsID",
                table: "Author");

            migrationBuilder.DropTable(
                name: "Events");

            migrationBuilder.DropIndex(
                name: "IX_Author_EventsID",
                table: "Author");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Contacts",
                table: "Contacts");

            migrationBuilder.DropColumn(
                name: "EventsID",
                table: "Author");

            migrationBuilder.RenameTable(
                name: "Contacts",
                newName: "Contact");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Contact",
                table: "Contact",
                column: "ContactID");
        }
    }
}
