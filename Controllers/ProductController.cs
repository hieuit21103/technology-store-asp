using Microsoft.AspNetCore.Authorization;
using technology_store_asp.Models;
using technology_store_asp.Services.Interfaces;

namespace technology_store_asp.Controllers
{
    public class ProductController : BaseController<Product>
    {
        private readonly IGenericService<Product> _service;

        public ProductController(IGenericService<Product> service) : base(service){
            _service = service;
        }

        [Authorize(Policy = "Admin")]
        public override async Task<IActionResult> Add(Product entity)
        {
            return await base.Add(entity);
        }

        [Authorize(Policy = "Admin")]
        public override async Task<IActionResult> Update(Product entity)
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

