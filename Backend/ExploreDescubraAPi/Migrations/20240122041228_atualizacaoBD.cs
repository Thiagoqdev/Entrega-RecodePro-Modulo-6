using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ExploreDescubraAPi.Migrations
{
    public partial class atualizacaoBD : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "cpf",
                table: "Clientes",
                newName: "Cpf");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Cpf",
                table: "Clientes",
                newName: "cpf");
        }
    }
}
