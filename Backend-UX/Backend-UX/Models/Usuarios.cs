using System;
using System.Collections.Generic;

namespace Proyecto_UX_1.Models
{
    public partial class Usuarios
    {
        public Usuarios()
        {
            Chat = new HashSet<Chat>();
            Ordenes = new HashSet<Ordenes>();
        }

        public int IdUsuario { get; set; }
        public string Correo { get; set; }
        public string Contrasena { get; set; }
        public int Rol { get; set; }
        public int Telefono { get; set; }

        public virtual ICollection<Chat> Chat { get; set; }
        public virtual ICollection<Ordenes> Ordenes { get; set; }
    }
}
