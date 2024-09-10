using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using BookStore.Models;
using BCrypt.Net;
using Microsoft.AspNetCore.Authorization;

namespace BookStore.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RolesController : ControllerBase
    {
        private readonly MyContext _context;

        public RolesController(MyContext context)
        {
            _context = context;
        }

        [Authorize]
        [HttpGet("roles")]
        public async Task<ActionResult<IEnumerable<Roles>>> GetRoles()
        {
            var roles = await _context.Roles.ToListAsync();
            return Ok(roles);
        }

        }
}