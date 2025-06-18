using technology_store_asp.Models;
using technology_store_asp.Data;
using technology_store_asp.Services;
using technology_store_asp.Services.Interfaces;

namespace technology_store_asp.Services{
    public class CategoryService : GenericService<Category>, IGenericService<Category>
    {
        public CategoryService(ApplicationDbContext context) : base(context) { }
    }
}
