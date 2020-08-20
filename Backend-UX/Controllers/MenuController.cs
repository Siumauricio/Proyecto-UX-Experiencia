using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Proyecto_UX_1.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class MenuController:Controller {
        public Models.ProyectoUXContext db;
        public MenuController(Models.ProyectoUXContext menu) {
            db = menu;
        }


        [HttpPost("postPizzas")]
        public IActionResult postPizzas() {
            var getdata = (from p in db.Productos.Where(options => options.MenuIdMenu == 1)
                           select new { p.IdProducto, p.Precio, p.Nombre, p.Descripcion, p.MenuIdMenu }).ToList();
            return Json(getdata);
        }

        [HttpGet("getPizzas")]
        public IActionResult getPizzas() {
            var getdata = (from p in db.Productos.Where(options => options.MenuIdMenu == 1)
                           select new { p.IdProducto, p.Precio, p.Nombre, p.Descripcion, p.MenuIdMenu, p.Url }).ToList();
            return Json(getdata);
        }

        [HttpPost("postBebidas")]
        public IActionResult postBebidas() {
            var getdata = (from p in db.Productos.Where(options => options.MenuIdMenu == 2)
                           select new { p.IdProducto, p.Precio, p.Nombre, p.Descripcion, p.MenuIdMenu, p.Url }).ToList();
            return Json(getdata);
        }

        [HttpGet("getBebidas")]
        public IActionResult getBebidas() {
            var getdata = (from p in db.Productos.Where(options => options.MenuIdMenu == 2)
                           select new { p.IdProducto, p.Precio, p.Nombre, p.Descripcion, p.MenuIdMenu, p.Url }).ToList();
            return Json(getdata);
        }

        [HttpPost("postPostres")]
        public IActionResult postPostres() {
            var getdata = (from p in db.Productos.Where(options => options.MenuIdMenu == 3)
                           select new { p.IdProducto, p.Precio, p.Nombre, p.Descripcion, p.MenuIdMenu, p.Url }).ToList();
            return Json(getdata);
        }

        [HttpGet("getPostres")]
        public IActionResult getPostres() {
            var getdata = (from p in db.Productos.Where(options => options.MenuIdMenu == 3)
                           select new { p.IdProducto, p.Precio, p.Nombre, p.Descripcion, p.MenuIdMenu, p.Url }).ToList();
            return Json(getdata);
        }
    }
}