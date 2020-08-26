using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Proyecto_UX_1.Models;
using Newtonsoft.Json.Serialization;
using Newtonsoft.Json;

namespace Proyecto_UX_1.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController:ControllerBase {
        public Models.ProyectoUXContext db;

        public AdminController(Models.ProyectoUXContext context) {
            db = context;
        }

        [HttpPost("Registro")]
        public IActionResult RegistrarUsuario([FromBody] Usuarios model) {//Registro de usuarios
            var data = db.Usuarios.Where(options => options.Correo == model.Correo.ToUpper()).ToList();
            if (data.Count >= 1) {
                return BadRequest(new { message = "Correo ya existe!" });
            }
            model.Correo = model.Correo.ToUpper();
            model.Rol = 1;
            db.Usuarios.Add(model);
            db.SaveChanges();
            var usuario = new Clientes {
                UsuariosIdUsuario = model.IdUsuario,
                Telefono = "999999"
            };
            db.Clientes.Add(usuario);
            db.SaveChanges();
            return Ok(data);
        }

        [HttpPost("Login")]
        public IActionResult ValidarUsuario([FromBody] Usuarios model) {//Registro de usuarios
            var data = db.Usuarios.Where(options => options.Correo == model.Correo.ToUpper() && options.Contrasena == model.Contrasena).ToList();
            if (data.Count >= 1) {
                return Ok(data);
            }
            return BadRequest(new { message = "Usuario Invalido!" }); ;
        }

        [HttpPost("getOrder/{id}")]
        public IActionResult getOrden(int id) {
            var data = db.Clientes.FirstOrDefault(x => x.UsuariosIdUsuario == id);
          
            var orders = db.Ordenes.Where(x => x.ClientesIdCliente == data.IdCliente)
                .Select(x => new { x.IdOrden ,x.TotalOrden ,x.FechaOrden}).ToList();
            return Ok(orders);
        }

        [HttpPost("getDetails/{id}")]
        public IActionResult getDetails(int id) {
            var productos = db.OrdenesProductos.Where(x => x.OrdenesIdOrden == id)
                .Select(x => new { x.ProductosIdProducto, x.ProductosIdProductoNavigation.Nombre, x.Cantidad, x.TotalProducto, x.ProductosIdProductoNavigation.Precio, x.ProductosIdProductoNavigation.Url }).ToList();
            return Ok(productos);
        }
    }
}
