using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using technology_store_asp.Models;
using technology_store_asp.Services.Interfaces;

namespace technology_store_asp.Controllers
{
    public class OrderController : BaseController<Order>
    {
        private readonly IGenericService<Order> _service;

        public OrderController(IGenericService<Order> service) : base(service){
            _service = service;
        }

        [Authorize(Policy = "Admin")]
        public override async Task<IActionResult> Add(Order entity)
        {
            return await base.Add(entity);
        }

        [Authorize(Policy = "Admin")]
        public override async Task<IActionResult> Update(Order entity)
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

