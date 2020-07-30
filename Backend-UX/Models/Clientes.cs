using System;
using System.Collections.Generic;

namespace Proyecto_UX_1.Models
{
    public partial class Clientes
    {
        public Clientes()
        {
            Chat = new HashSet<Chat>();
            Ordenes = new HashSet<Ordenes>();
        }

        public int IdCliente { get; set; }
        public int UsuariosIdUsuario { get; set; }
        public string Telefono { get; set; }

        public virtual Usuarios UsuariosIdUsuarioNavigation { get; set; }
        public virtual ICollection<Chat> Chat { get; set; }
        public virtual ICollection<Ordenes> Ordenes { get; set; }
    }
}
