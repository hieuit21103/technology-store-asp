using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using technology_store_asp.Models;

namespace technology_store_asp.Models
{
    [Table("CartItems")]
    public class CartItem
    {
        [Key]
        public Guid Id { get; set; }

        [ForeignKey("User")]
        public Guid UserId { get; set; }

        [ForeignKey("ProductVariant")]
        public Guid ProductVariantId { get; set; }

        public int Quantity { get; set; }
        public DateTime CreatedAt { get; set; }

        public User User { get; set; } = null!;
        public ProductVariant ProductVariant { get; set; } = null!;
    }
}