using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace technology_store_asp.Models
{
    [Table("ProductImages")]
    public class ProductImage
    {
        [Key]
        public Guid Id { get; set; }

        [Required, MaxLength(255)]
        public string ImageUrl { get; set; } = string.Empty;

        [ForeignKey("Product")]
        public Guid ProductId { get; set; }

        public Product Product { get; set; } = null!;

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }   
}