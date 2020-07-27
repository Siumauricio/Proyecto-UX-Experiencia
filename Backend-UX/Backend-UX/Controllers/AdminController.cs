using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Proyecto_UX_1.Models;

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
            var data = db.Usuarios.Where(options => options.Correo == model.Correo).ToList();

            if (data.Count >= 1) {
                return BadRequest(new { message = "Username ya existe" });
            }
            db.Usuarios.Add(model);
            db.SaveChanges();
            return Ok(data);
        }
    }
}
