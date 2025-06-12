using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using technology_store_asp.Models;

namespace technology_store_asp.Models
{
    [Table("Products")]
    public class Product
    {
        [Key]
        public Guid Id { get; set; }

        [Required, MaxLength(255)]
        public string Name { get; set; } = string.Empty;

        [Required, MaxLength(255)]
        public string Slug { get; set; } = string.Empty;

        public string? Description { get; set; }

        [Column(TypeName = "decimal(10,2)")]
        public decimal BasePrice { get; set; }

        public bool IsPublished { get; set; } = true;
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public ICollection<ProductVariant> Variants { get; set; } = new List<ProductVariant>();
        public ICollection<Category> Categories { get; set; } = new List<Category>();
        public ICollection<ProductImage> Images { get; set; } = new List<ProductImage>();
    }
}