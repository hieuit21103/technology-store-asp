using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using technology_store_asp.Models;

namespace technology_store_asp.Models
{
    [Table("UserAddresses")]
    public class UserAddress
    {
        [Key]
        public Guid Id { get; set; }

        [ForeignKey("ApplicationUser")]
        public string UserId { get; set; } = string.Empty;

        [Required, MaxLength(255)]
        public string FullName { get; set; } = string.Empty;

        [Required, MaxLength(20)]
        public string Phone { get; set; } = string.Empty;

        [Required, MaxLength(255)]
        public string AddressLine { get; set; } = string.Empty;

        [Required, MaxLength(100)]
        public string Ward { get; set; } = string.Empty;

        [Required, MaxLength(100)]
        public string District { get; set; } = string.Empty;

        [Required, MaxLength(100)]
        public string City { get; set; } = string.Empty;

        public bool IsDefault { get; set; } = false;

        public ApplicationUser User { get; set; } = null!;
    }

}