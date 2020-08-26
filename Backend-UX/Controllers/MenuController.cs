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

        [HttpGet("getProducts{idMenu}")]
        public IActionResult getProducts(int idMenu)
        {
            var getdata = (from p in db.Productos.Where(options => options.MenuIdMenu == idMenu && options.Status == 1)
                           select new { p.IdProducto, p.Precio, p.Nombre, p.Descripcion, p.MenuIdMenu, p.Url }).ToList();
            return Json(getdata);
        }
    }
}
