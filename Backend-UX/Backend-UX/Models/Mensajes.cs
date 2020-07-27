using System;
using System.Collections.Generic;

namespace Proyecto_UX_1.Models
{
    public partial class Mensajes
    {
        public int IdMensaje { get; set; }
        public int Status { get; set; }
        public DateTime FechaMensaje { get; set; }
        public string Mensaje { get; set; }
        public int ChatIdChat { get; set; }

        public virtual Chat ChatIdChatNavigation { get; set; }
    }
}
