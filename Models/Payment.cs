using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using technology_store_asp.Models;

namespace technology_store_asp.Models
{
    [Table("Payments")]
public class Payment
{
    [Key]
    public Guid Id { get; set; }

    [ForeignKey("Order")]
    public Guid OrderId { get; set; }

    [Required, MaxLength(50)]
    public string Method { get; set; } = string.Empty;

    [Required, MaxLength(50)]
    public string Status { get; set; } = string.Empty;

    [MaxLength(255)]
    public string? TransactionCode { get; set; }

    [Column(TypeName = "decimal(10,2)")]
    public decimal Amount { get; set; }

    public DateTime? PaidAt { get; set; }

    public Order Order { get; set; } = null!;
}}