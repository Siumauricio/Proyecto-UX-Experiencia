using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Proyecto_UX_1.Models;

namespace Proyecto_UX_1.Controllers
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
            var getdata = (from r in db.Reviews.Where(options => options.ProductosIdProducto == id)
                           select new { r.Mensaje, r.Fecha, r.Valoracion, r.ProductosIdProducto }).ToList();
            return Json(getdata);
        }

        [HttpGet("getReviews{id}")]
        public IActionResult getReviews(int id)
        {
            var getdata = (from r in db.Reviews.Where(options => options.ProductosIdProducto == id)
                           select new { r.Mensaje, r.Fecha, r.Valoracion, r.ProductosIdProducto }).ToList();
            return Json(getdata);
        }

        [HttpPost("postAddReviews")]
        public IActionResult postAddReviews([FromBody] Reviews reviews)
        {
            db.Reviews.Add(reviews);
            db.SaveChanges();
            return Ok();
        }

        [HttpGet("getAddReviews")]
        public IActionResult getAddReviews([FromBody] Reviews reviews)
        {
            db.Reviews.Add(reviews);
            db.SaveChanges();
            return Ok();
        }
    }
}
