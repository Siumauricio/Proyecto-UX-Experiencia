using System;
using System.Collections.Generic;

namespace Proyecto_UX_1.Models
{
    public partial class Reviews
    {
        public int IdReview { get; set; }
        public int Valoracion { get; set; }
        public string Mensaje { get; set; }
        public DateTime Fecha { get; set; }
        public int ProductosIdProducto { get; set; }

        public virtual Productos ProductosIdProductoNavigation { get; set; }
    }
}
