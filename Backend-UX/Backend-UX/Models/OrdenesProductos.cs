using System;
using System.Collections.Generic;

namespace Proyecto_UX_1.Models
{
    public partial class OrdenesProductos
    {
        public int OrdenesIdOrden { get; set; }
        public int ProductosIdProducto { get; set; }

        public virtual Ordenes OrdenesIdOrdenNavigation { get; set; }
        public virtual Productos ProductosIdProductoNavigation { get; set; }
    }
}
