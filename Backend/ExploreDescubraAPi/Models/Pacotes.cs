using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ExploreDescubraAPi.Models
{
    public class Pacotes
    {
        
        [Key]
        public int Id { get; set; }
        public string Periodo { get; set; }
        public double Preco { get; set; }
        public string Destino { get; set; }
        [JsonIgnore]
        public List<Compras> Compras { get; set; }
    }
}
