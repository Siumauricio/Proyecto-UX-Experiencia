using System;
using System.Collections.Generic;

namespace Proyecto_UX_1.Models
{
    public partial class Chat
    {
        public Chat()
        {
            Mensajes = new HashSet<Mensajes>();
        }

        public int IdChat { get; set; }
        public int Status { get; set; }
        public string NombreTemp { get; set; }
        public int UsuariosIdUsuario { get; set; }

        public virtual Usuarios UsuariosIdUsuarioNavigation { get; set; }
        public virtual ICollection<Mensajes> Mensajes { get; set; }
    }
}
