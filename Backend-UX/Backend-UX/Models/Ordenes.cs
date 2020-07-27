using System;
using System.Collections.Generic;

namespace Proyecto_UX_1.Models
{
    public partial class Ordenes
    {
        public Ordenes()
        {
            OrdenesProductos = new HashSet<OrdenesProductos>();
        }

        public int IdOrden { get; set; }
        public DateTime FechaOrden { get; set; }
        public decimal TotalOrden { get; set; }
        public int UsuariosIdUsuario { get; set; }

        public virtual Usuarios UsuariosIdUsuarioNavigation { get; set; }
        public virtual ICollection<OrdenesProductos> OrdenesProductos { get; set; }
    }
}
