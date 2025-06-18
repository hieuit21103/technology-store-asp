using Microsoft.AspNetCore.Authorization;
using technology_store_asp.Models;
using technology_store_asp.Services.Interfaces;

namespace technology_store_asp.Controllers
{
    public class CategoryController : BaseController<Category>
    {
        private readonly IGenericService<Category> _service;

        public CategoryController(IGenericService<Category> service) : base(service){
            _service = service;
        }

        [Authorize(Policy = "Admin")]
        public override async Task<IActionResult> Add(Category entity)
        {
            return await base.Add(entity);
        }

        [Authorize(Policy = "Admin")]
        public override async Task<IActionResult> Update(Category entity)
        {
            return await base.Update(entity);
        }

        [Authorize(Policy = "Admin")]
        public override async Task<IActionResult> Delete(int id)
        {
            return await base.Delete(id);
        }
    }
}

