using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace technology_store_asp.Models.DTOs
{
    public class RegisterDto
    {
        public string Email { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }
}