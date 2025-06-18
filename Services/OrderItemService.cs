using technology_store_asp.Models;
using technology_store_asp.Data;
using technology_store_asp.Services;
using technology_store_asp.Services.Interfaces;

namespace technology_store_asp.Services{
    public class OrderItemService : GenericService<OrderItem>, IGenericService<OrderItem>
    {
        public OrderItemService(ApplicationDbContext context) : base(context) { }
    }
}
