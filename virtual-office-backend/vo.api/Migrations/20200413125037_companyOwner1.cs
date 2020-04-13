using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace vo.api.Migrations
{
    public partial class companyOwner1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Owner_Companies_CompanyId",
                table: "Owner");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Owner",
                table: "Owner");

            migrationBuilder.RenameTable(
                name: "Owner",
                newName: "Owners");

            migrationBuilder.RenameIndex(
                name: "IX_Owner_EmailId",
                table: "Owners",
                newName: "IX_Owners_EmailId");

            migrationBuilder.RenameIndex(
                name: "IX_Owner_CompanyId",
                table: "Owners",
                newName: "IX_Owners_CompanyId");

            migrationBuilder.AddColumn<bool>(
                name: "IsActiveUser",
                table: "Users",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsVerified",
                table: "Users",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "AddedOn",
                table: "Companies",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsVerified",
                table: "Companies",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "VerifiedOn",
                table: "Companies",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "PhoneNumber",
                table: "Owners",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Owners",
                table: "Owners",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Owners_Companies_CompanyId",
                table: "Owners",
                column: "CompanyId",
                principalTable: "Companies",
                principalColumn: "CompanyId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Owners_Companies_CompanyId",
                table: "Owners");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Owners",
                table: "Owners");

            migrationBuilder.DropColumn(
                name: "IsActiveUser",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "IsVerified",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "AddedOn",
                table: "Companies");

            migrationBuilder.DropColumn(
                name: "IsVerified",
                table: "Companies");

            migrationBuilder.DropColumn(
                name: "VerifiedOn",
                table: "Companies");

            migrationBuilder.DropColumn(
                name: "PhoneNumber",
                table: "Owners");

            migrationBuilder.RenameTable(
                name: "Owners",
                newName: "Owner");

            migrationBuilder.RenameIndex(
                name: "IX_Owners_EmailId",
                table: "Owner",
                newName: "IX_Owner_EmailId");

            migrationBuilder.RenameIndex(
                name: "IX_Owners_CompanyId",
                table: "Owner",
                newName: "IX_Owner_CompanyId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Owner",
                table: "Owner",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Owner_Companies_CompanyId",
                table: "Owner",
                column: "CompanyId",
                principalTable: "Companies",
                principalColumn: "CompanyId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
