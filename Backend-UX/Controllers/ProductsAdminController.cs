using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Backend_UX.Models;
using Microsoft.EntityFrameworkCore.Query.SqlExpressions;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Backend_UX.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsAdminController : Controller
    {
        public Models.ProyectoUXContext db;
        public ProductsAdminController(Models.ProyectoUXContext products) {
            db = products;
        }

        [HttpGet("getProductsByMenu{id}")]
        public IActionResult getProductsByMenu(int id) {
            var data = (from p in db.Productos.Where(option => option.MenuIdMenu == id)
                        select new { p.IdProducto, p.Precio,p.Nombre, p.MenuIdMenu, p.Descripcion, p.Url }).ToList();
                return Json(data);
        }

        [HttpGet("getProductById{id}")]
        public IActionResult getProductById(int id) {
            var data = (from p in db.Productos.Where(option => option.IdProducto == id)
                        select new { p.IdProducto, p.Precio, p.Nombre, p.MenuIdMenu, p.Descripcion, p.Url }).ToList();
            if (data.Count()==0)
            {
              return Ok(false);
               /// return BadRequest(new { message = "Producto no existe" });
            }
            return Json(data);
        }


        [HttpPost("addProduct")]
        public IActionResult addProduct([FromBody] Productos productos) 
        {
            db.Productos.Add(productos);
            db.SaveChanges();
            return Ok();
        }

        [HttpDelete("deleteProduct{id}")]
        public IActionResult deleteProduct(int id)
        {
            var product = new Productos { IdProducto = id };
            db.Productos.Remove(product);
            db.SaveChanges();
            return Ok();
        }

        [HttpPut("putProduct")]
        public IActionResult putProduct([FromBody] Productos producto)
        {
            db.Productos.Attach(producto);
            db.Entry(producto).State = EntityState.Modified;
            db.SaveChanges();
            return Ok();
        }

    }
}
