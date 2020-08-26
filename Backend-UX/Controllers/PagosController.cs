using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Proyecto_UX_1.Models;

namespace Proyecto_UX_1.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class PagosController:ControllerBase {
        public Models.ProyectoUXContext db;

        public PagosController(Models.ProyectoUXContext context) {
            db = context;
        }

        [HttpPost("IngresarCompra")]
        public int ingresarCompra([FromBody] Ordenes model) {
            var data = db.Clientes.SingleOrDefault(x => x.UsuariosIdUsuario == model.ClientesIdCliente);
            model.FechaOrden = DateTime.Now;
            model.ClientesIdCliente = data.IdCliente;
            db.Add(model);
            db.SaveChanges();
            return model.IdOrden;
        }

        [HttpPost("IngresarOrdenes")]
        public IActionResult ingresarOrdenes([FromBody] OrdenesProductos model) {
            db.OrdenesProductos.Add(model);
            db.SaveChanges();
            return Ok();
        }

        [HttpPost("enviarEmail/{destino}/{id}/{total}")]
        public IActionResult enviarEmail(string destino,int id,int total) {

            string _sender = "enrik_cs@hotmail.com";
            string _password = "Capillas";

            SmtpClient client = new SmtpClient("smtp-mail.outlook.com");

            client.Port = 587;
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.UseDefaultCredentials = false;
            System.Net.NetworkCredential credentials =
                new System.Net.NetworkCredential(_sender, _password);
            client.EnableSsl = true;
            client.Credentials = credentials;

            MailMessage message = new MailMessage(_sender,destino);
            message.Subject = "Crunchy Roll Pizza";
            message.Body = "Felicidades has completado tu orden en Crunchy roll piza\nAgradecemos tu confiabilidad\nEste es tu ID de Orden:"+id + "\nCon un Total de :"+total+"\nEl repartidor llegara en aproximadamente 30 Minutos\nGracias por comprar en Crunchy Roll!";
            client.Send(message);
            client.Dispose();
            //db.OrdenesProductos.Add(model);
            //db.SaveChanges();
            return Ok();
        }
    }
}
