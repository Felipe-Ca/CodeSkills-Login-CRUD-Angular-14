using System.ComponentModel.DataAnnotations;

namespace Laboratory.Models.Entities
{
    public class User
    {

        public int Id { get; set; }

        //[StringLength(50, ErrorMessage = "El {0} debe tener al menos {2} y maximo {1} caracteres", MinimumLength = 3)]
        public string FirsName { get; set; }

        //[StringLength(50, ErrorMessage = "El {0} debe tener al menos {2} y maximo {1} caracteres", MinimumLength = 3)]
        public string LastName { get; set; }

        //[StringLength(12, ErrorMessage = "El {0} debe tener al menos {2} y maximo {1} caracteres", MinimumLength = 7)]
        public int Document { get; set; }

        //public DateTime Datebirth { get; set; }

        //public DateTime CreatedDate { get; set; } = DateTime.Now;
        public int DocumentTypeId { get; set; }

        public  DocumentType? DocumentType { get; set; }

    }
}
