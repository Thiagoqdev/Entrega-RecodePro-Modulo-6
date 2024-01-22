using System.ComponentModel.DataAnnotations;
namespace ExploreDescubraAPi.Models
{
    public class Compras
    {
        [Key]
        public int Id { get; set; }
        public string Data { get; set; }
        public Pacotes Pacotes { get; set; }
        public int PacotesId { get; set; }
        public Clientes Clientes { get; set; }
        public int ClientesId { get; set; }

    }
}
