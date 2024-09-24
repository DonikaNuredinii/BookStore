using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;
using BookStore.Models;
using BookStore.DTOs;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens; // Required for TokenValidationParameters and other related classes


[ApiController]
[Route("api/[controller]")]
public class RatingController : ControllerBase
{
    private readonly MyContext _context;
    private readonly IConfiguration _configuration;

    public RatingController(MyContext context, IConfiguration configuration)
    {
        _context = context;
    }

[HttpPost]
[Authorize]
public async Task<IActionResult> PostRating([FromBody] RatingDTO ratingDto)
{
    var token = HttpContext.Request.Headers["Authorization"].ToString();
    if (string.IsNullOrEmpty(token))
    {
        return Unauthorized();
    }

    var tokenHandler = new JwtSecurityTokenHandler();
    var jwtToken = tokenHandler.ReadToken(token.Replace("Bearer ", "")) as JwtSecurityToken;

    if (jwtToken == null)
    {
        return Unauthorized();
    }

    var userIdClaim = jwtToken.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier);
    if (userIdClaim == null)
    {
        return Unauthorized();
    }

    var userIdString = userIdClaim.Value;
    if (!int.TryParse(userIdString, out int userId))
    {
        return Unauthorized(); // Return unauthorized if user ID cannot be parsed
    }

    // Assuming you have a way to fetch the user details using userId
    var user = await _context.Users.FindAsync(userId);
    if (user == null)
    {
        return NotFound(); // User not found
    }

    var rating = new Rating
    {
        BookID = ratingDto.BookID,
        RatingValue = ratingDto.RatingValue,
        UserID = userId, // Use the parsed integer userId
        // Assuming you want to store the username as well, add this property in your Rating model
        // If Username is not a property of Rating, remove this line
        Username = user.Username // Assuming you have a Username property in your User entity
    };

    await _context.Ratings.AddAsync(rating);
    await _context.SaveChangesAsync();

    return Ok(rating);
}



    [HttpGet("{bookId}")]
    public IActionResult GetBookRating(int bookId)
    {
        var ratings = _context.Ratings.Where(r => r.BookID == bookId);
        if (!ratings.Any())
        {
            return Ok(new { averageRating = 0 });
        }

        var averageRating = ratings.Average(r => r.RatingValue);
        return Ok(new { averageRating });
    }
}
