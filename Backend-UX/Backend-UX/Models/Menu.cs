using System;
using System.Collections.Generic;

namespace Proyecto_UX_1.Models
{
    public partial class Menu
    {
        public Menu()
        {
            Productos = new HashSet<Productos>();
        }

        public int IdMenu { get; set; }
        public string Nombre { get; set; }

        public virtual ICollection<Productos> Productos { get; set; }
    }
}
