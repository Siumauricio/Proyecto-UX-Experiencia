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
        public int ClientesIdCliente { get; set; }
        public int AdministradorIdAdministrador { get; set; }

        public virtual Administrador AdministradorIdAdministradorNavigation { get; set; }
        public virtual Clientes ClientesIdClienteNavigation { get; set; }
        public virtual ICollection<Mensajes> Mensajes { get; set; }
    }
}
