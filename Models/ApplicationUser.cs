using Microsoft.AspNetCore.Identity;

namespace technology_store_asp.Models
{
    public class ApplicationUser : IdentityUser
    {
        public ICollection<Order>? Orders { get; set; }
        public ICollection<UserAddress>? Addresses { get; set; }
    }
}
