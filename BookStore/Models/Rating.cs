using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
    public class Rating
    {
        [Key]
        public int RatingID { get; set; }

        [ForeignKey("BookID")]
        public int BookID { get; set; }
        public Book Book { get; set; }

        [ForeignKey("UserID")]
        public int UserID { get; set; }
        public string Username { get; set; }
        public User User { get; set; }

        [Range(1, 5)]
        public int RatingValue { get; set; }

        public DateTime RatedAt { get; set; }
    }
}
