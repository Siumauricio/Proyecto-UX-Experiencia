using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Backend_UX.Models;

namespace Backend_UX.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReviewsController : Controller
    {

        public Models.ProyectoUXContext db;
        public ReviewsController(Models.ProyectoUXContext reviews)
        {
            db = reviews;
        }

        [HttpPost("postReviews{id}")]
        public IActionResult postReviews(int id)
        {
            var getdata = (from r in db.Reviews.Where(options => options.ProductosIdProducto == id )
                           select new { r.Mensaje, r.Fecha, r.Valoracion, r.ProductosIdProducto}).ToList();
            return Json(getdata);
        }

        [HttpGet("getReviews{id}")]
        public IActionResult getReviews(int id)
        {
            var getdata = (from r in db.Reviews.Where(options => options.ProductosIdProducto == id)
                           select new { r.Mensaje, r.Fecha, r.Valoracion, r.ProductosIdProducto }).ToList();
            return Json(getdata);
        }

    }
}
