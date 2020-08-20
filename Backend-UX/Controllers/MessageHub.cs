using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Proyecto_UX_1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;
using Proyecto_UX_1.Controllers;

namespace Proyecto_UX_1.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController:Hub {
        public Models.ProyectoUXContext db;

        [HttpPost("mandar")]
        public void Get(string message) { 
            Clients.All.SendAsync("MessageReceived", message);
        }
    }
}
