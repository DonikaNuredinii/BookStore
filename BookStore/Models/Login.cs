using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
    public class Login
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}