using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using technology_store_asp.Models;

namespace technology_store_asp.Models
{ 
    [Table("ProductVariants")]
    public class ProductVariant
    {
        [Key]
        public Guid Id { get; set; }

        [ForeignKey("Product")]
        public Guid ProductId { get; set; }

        [Required, MaxLength(100)]
        public string SKU { get; set; } = string.Empty;

        [Required, MaxLength(255)]
        public string VariantName { get; set; } = string.Empty;

        [Column(TypeName = "decimal(10,2)")]
        public decimal Price { get; set; }

        public int StockQty { get; set; }
        public float? Weight { get; set; }

        public Product Product { get; set; } = null!;
    }
}