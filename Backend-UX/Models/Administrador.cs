using System;
using System.Collections.Generic;

namespace Proyecto_UX_1.Models
{
    public partial class Administrador
    {
        public Administrador()
        {
            Chat = new HashSet<Chat>();
        }

        public int IdAdministrador { get; set; }
        public int UsuariosIdUsuario { get; set; }

        public virtual Usuarios UsuariosIdUsuarioNavigation { get; set; }
        public virtual ICollection<Chat> Chat { get; set; }
    }
}
