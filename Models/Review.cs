using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using technology_store_asp.Models;

namespace technology_store_asp.Models
{
    [Table("Reviews")]
    public class Review
    {
        [Key]
        public Guid Id { get; set; }

        [ForeignKey("User")]
        public Guid UserId { get; set; }

        [ForeignKey("Product")]
        public Guid ProductId { get; set; }

        [Range(1, 5)]
        public int Rating { get; set; }

        public string? Comment { get; set; }
        public DateTime CreatedAt { get; set; }

        public User User { get; set; } = null!;
        public Product Product { get; set; } = null!;
    }

}