using System;
using System.Collections.Generic;

namespace Proyecto_UX_1.Models
{
    public partial class Usuarios
    {
        public int IdUsuario { get; set; }
        public string Correo { get; set; }
        public int Contrasena { get; set; }
        public int Rol { get; set; }
        public string Nombre { get; set; }

        public virtual Administrador Administrador { get; set; }
        public virtual Clientes Clientes { get; set; }
    }
}
