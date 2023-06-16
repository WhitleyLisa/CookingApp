using CookingAppApi.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net.Sockets;

namespace CookingAppApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeContoller: ControllerBase
    {
        private readonly RecipeService _recipeApiService;

        public HomeContoller(RecipeService recipeApiService)
        {
            _recipeApiService = recipeApiService;
        }

        [HttpGet]
        public async Task<ActionResult<Rootobject>> GetRecipe()
        {
            string searchTerm = "Peanut Butter";
            return await _recipeApiService.GetRecipe($"?from=0&size=5&q={searchTerm}");        }

    }
}

