using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;
using BookStore.Models;
using BookStore.DTOs;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Configuration;

namespace BookStore.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RatingController : ControllerBase
    {
        private readonly MyContext _context;
        private readonly IConfiguration _configuration;

        public RatingController(MyContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpGet("{bookId}/ratings")]
        public async Task<ActionResult<RatingResponse>> GetBookRatings(int bookId)
        {

            var ratings = await _context.Ratings
                .Where(r => r.BookID == bookId) 
                .ToListAsync();


            var averageRating = ratings.Any() ? ratings.Average(r => r.RatingValue) : 0;


            return Ok(new RatingResponse 
            { 
                AverageRating = averageRating, 
                TotalRatings = ratings.Count() 
            });
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
                return Unauthorized(); 
            }

            var user = await _context.Users.FindAsync(userId);
            if (user == null)
            {
                return NotFound(); 
            }

            var rating = new Rating
            {
                BookID = ratingDto.BookID,
                RatingValue = ratingDto.RatingValue,
                UserID = userId, 
                Username = user.Username 
            };

            await _context.Ratings.AddAsync(rating);
            await _context.SaveChangesAsync();

            return Ok(rating);
        }

        [HttpPut("{ratingId}")]
        [Authorize]
        public async Task<IActionResult> UpdateRating(int ratingId, [FromBody] RatingDTO ratingDto)
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
                return Unauthorized();
            }

            var rating = await _context.Ratings.FindAsync(ratingId);
            if (rating == null)
            {
                return NotFound("Rating not found.");
            }

            if (rating.UserID != userId)
            {
                return Forbid("You can only update your own ratings.");
            }

            rating.RatingValue = ratingDto.RatingValue;
            _context.Ratings.Update(rating);
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
}
