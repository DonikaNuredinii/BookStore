﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
    public class User
    {
        
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        [ForeignKey("Roles")]
        public int RolesID { get; set; }
        public DateTime RegistrationDate { get; set; }


        public User()
        {
            RolesID = 2; // Default role ID
        }
    }
}
