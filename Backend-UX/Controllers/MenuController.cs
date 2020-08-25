using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace Proyecto_UX_1.Controllers
{
    [ApiController]
    [Route("[controller]")]
      public class MenuController : Controller
    {
        
        public Models.ProyectoUXContext db;
        public MenuController(Models.ProyectoUXContext menu)
        {
            db = menu;
        }

        [HttpGet("getPizzas")]
        public IActionResult getPizzas()
        {
            var getdata = (from p in db.Productos.Where(options => options.MenuIdMenu == 1 && options.Status == 1)
                           select new { p.IdProducto, p.Precio, p.Nombre, p.Descripcion, p.MenuIdMenu, p.Url }).ToList();
            return Json(getdata);
        }


        [HttpGet("getBebidas")]
        public IActionResult getBebidas()
        {
            var getdata = (from p in db.Productos.Where(options => options.MenuIdMenu == 2 && options.Status == 1)
                           select new { p.IdProducto, p.Precio, p.Nombre, p.Descripcion, p.MenuIdMenu, p.Url }).ToList();
            return Json(getdata);
        }


        [HttpGet("getPostres")]
        public IActionResult getPostres()
        {
            var getdata = (from p in db.Productos.Where(options => options.MenuIdMenu == 3 && options.Status == 1)
                           select new { p.IdProducto, p.Precio, p.Nombre, p.Descripcion, p.MenuIdMenu, p.Url }).ToList();
            return Json(getdata);
        }
    }
}
