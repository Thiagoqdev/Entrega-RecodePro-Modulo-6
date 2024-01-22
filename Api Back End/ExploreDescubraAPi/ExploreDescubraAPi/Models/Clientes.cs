using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
namespace ExploreDescubraAPi.Models
{
    public class Clientes
    {

        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Nome é obrigatorio")]
        [MaxLength(60, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]
        [MinLength(3, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Cpf { get; set; }
        public string Senha { get; set; }
        public List<Compras> Compras { get; set; }
    }

}
