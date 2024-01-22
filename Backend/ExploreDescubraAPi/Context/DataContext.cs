using ExploreDescubraAPi.Models;
using Microsoft.EntityFrameworkCore;


namespace ExploreDescubraAPi.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Clientes> Clientes { get; set; }
        public DbSet<Pacotes> Pacotes { get; set; }
        public DbSet<Compras> Compras { get; set; }
    }
}
