using Microsoft.AspNetCore.Authorization;
using technology_store_asp.Models;
using technology_store_asp.Services.Interfaces;

namespace technology_store_asp.Controllers
{
    public class UserController : BaseController<ApplicationUser>
    {
        private readonly IGenericService<ApplicationUser> _service;

        public UserController(IGenericService<ApplicationUser> service) : base(service){
            _service = service;
        }

        [Authorize(Policy = "Admin")]
        public override async Task<IActionResult> Add(ApplicationUser entity)
        {
            return await base.Add(entity);
        }

        [Authorize(Policy = "Admin")]
        public override async Task<IActionResult> Update(ApplicationUser entity)
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

