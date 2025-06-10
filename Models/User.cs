using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace technology_store_asp.Models
{
    [Table("users")]
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string name { get; set; }

        [Required]
        [StringLength(100)]
        public string password { get; set; }

        [EmailAddress]
        [StringLength(200)]
        public string email { get; set; }

        [StringLength(100)]
        public string? remember_token { get; set; }

        public DateTime email_verified_at { get; set; } = DateTime.MinValue;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}