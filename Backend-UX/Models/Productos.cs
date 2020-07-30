using System;
using System.Collections.Generic;

namespace Proyecto_UX_1.Models
{
    public partial class Productos
    {
        public Productos()
        {
            OrdenesProductos = new HashSet<OrdenesProductos>();
            Reviews = new HashSet<Reviews>();
        }

        public int IdProducto { get; set; }
        public decimal Precio { get; set; }
        public string Nombre { get; set; }
        public int MenuIdMenu { get; set; }
        public string Descripcion { get; set; }

        public virtual Menu MenuIdMenuNavigation { get; set; }
        public virtual ICollection<OrdenesProductos> OrdenesProductos { get; set; }
        public virtual ICollection<Reviews> Reviews { get; set; }
    }
}
