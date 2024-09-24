namespace BookStore.DTOs;
using System.ComponentModel.DataAnnotations;
public class RatingDTO
{
    public int BookID { get; set; }
    [Range(1, 5)]
    public int RatingValue { get; set; }
}
