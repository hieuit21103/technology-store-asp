using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using technology_store_asp.Models;

namespace technology_store_asp.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) {}

        public DbSet<UserAddress> UserAddresses { get; set; }
        public DbSet<UserProfile> UserProfiles { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<CartItem> CartItems { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductVariant> ProductVariants { get; set; }
        public DbSet<Payment> Payments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
