using technology_store_asp.Models;
using technology_store_asp.Data;
using technology_store_asp.Services;
using technology_store_asp.Services.Interfaces;

namespace technology_store_asp.Services{
    public class ProductService : GenericService<Product>
    {
        public ProductService(ApplicationDbContext context) : base(context) { }
    }
}
