using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using technology_store_asp.Models;
using technology_store_asp.Services.Interfaces;

namespace technology_store_asp.Controllers
{
    public class OrderItemController : BaseController<OrderItem>
    {
        private readonly IGenericService<OrderItem> _service;

        public OrderItemController(IGenericService<OrderItem> service) : base(service){
            _service = service;
        }

        [Authorize(Policy = "Admin")]
        public override async Task<IActionResult> Add(OrderItem entity)
        {
            return await base.Add(entity);
        }

        [Authorize(Policy = "Admin")]
        public override async Task<IActionResult> Update(OrderItem entity)
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

