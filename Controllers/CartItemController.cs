using Microsoft.AspNetCore.Mvc;
using technology_store_asp.Models;
using technology_store_asp.Services.Interfaces;

namespace technology_store_asp.Controllers
{
    public class CartItemController : BaseController<CartItem>
    {
        private readonly IGenericService<CartItem> _service;

        public CartItemController(IGenericService<CartItem> service) : base(service){
            _service = service;
        }
    }
}

