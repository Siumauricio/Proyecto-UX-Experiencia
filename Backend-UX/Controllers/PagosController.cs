using System;
using System.Collections.Generic;
using System.Linq;
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
    }
}
