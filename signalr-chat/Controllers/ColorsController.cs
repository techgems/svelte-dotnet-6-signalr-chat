using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using signalr_chat.Services;

namespace signalr_chat.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ColorsController : ControllerBase
    {
        private readonly IColorService _colorService;

        public ColorsController(IColorService colorService)
        {
            _colorService = colorService;
        }

        [HttpGet]
        [Route("AvailableColors")]
        public IActionResult GetAvailableColors()
        {
            return Ok(_colorService.GetAvailableColors());
        }
    }
}
