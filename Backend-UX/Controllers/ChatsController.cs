using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Query.SqlExpressions;
using Proyecto_UX_1.Models;

namespace Proyecto_UX_1.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class ChatsController:ControllerBase {

        public Models.ProyectoUXContext db;
        public ChatsController(Models.ProyectoUXContext context) {
            db = context;
        }

        [HttpGet("ChatsActivos")]
        public IActionResult getChatsActivos() {//Registro de usuariosq
            var data = (from a in db.Chat
                        join b in db.Clientes on a.ClientesIdCliente equals b.IdCliente
                        select new { a.IdChat, b.UsuariosIdUsuario, b.UsuariosIdUsuarioNavigation.Nombre, a.Status, b.UsuariosIdUsuarioNavigation.Rol }).ToList();
            return Ok(data);
        }
        [HttpGet("ChatCliente/{id}")]
        public IActionResult getChatClient(int id) {//Registro de usuariosq
            var data = db.Chat.Where(res => res.ClientesIdClienteNavigation.UsuariosIdUsuario == id)
                .Select(x => new { x.AdministradorIdAdministradorNavigation.UsuariosIdUsuarioNavigation.Nombre, x.IdChat, x.ClientesIdCliente, x.AdministradorIdAdministrador }).ToList();
            if (data != null) {
                return Ok(data);
            }
            return Ok();
        }

        [HttpGet("getMessageClient/{id}")]
        public IActionResult getMessageClient(int id) {//Registro de usuariosq
            var data = db.Mensajes.Where(res => res.ChatIdChat == id)
                .Select(x => new { x.IdMensaje, x.Status, x.ChatIdChatNavigation.ClientesIdClienteNavigation.UsuariosIdUsuarioNavigation.Rol, x.Mensaje }).ToList();

            if (data != null) {
                return Ok(data);
            }
            return Ok();
        }
        [HttpPost("InsertarMensajeC")]
        public IActionResult postMessageClient([FromBody] Mensajes msj) {
            msj.FechaMensaje = DateTime.Now;
            msj.Status = 1;
            db.Mensajes.Add(msj);
            db.SaveChanges();
            return Ok();
        }

        [HttpPost("InsertarMensajeA")]
        public IActionResult postMessageAdmin([FromBody] Mensajes msj) {
            msj.FechaMensaje = DateTime.Now;
            msj.Status = 0;
            db.Mensajes.Add(msj);
            db.SaveChanges();
            return Ok();
        }

    }
}

