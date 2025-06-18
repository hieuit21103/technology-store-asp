using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using technology_store_asp.Models;
using technology_store_asp.Models.DTOs;
using technology_store_asp.Services;
using technology_store_asp.Services.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;

namespace technology_store_asp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationUserService _userService;

        private readonly JwtService _jwtService;

        public AuthController(ApplicationUserService userService, JwtService jwtService)
        {
            _userService = userService;
            _jwtService = jwtService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto dto)
        {
            try
            {
                var user = await _userService.LoginAsync(dto);
                if (user == null)
                {
                    return BadRequest("Sai thông tin đăng nhập");
                }
                var token = _jwtService.GenerateToken(user);
                return Ok(new { token, user });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto dto)
        {
            try
            {
                var user = await _userService.RegisterAsync(dto);
                if (user == null)
                {
                    return BadRequest("Đăng ký thất bại");
                }
                var token = _jwtService.GenerateToken(user);
                return Ok(new { token, user });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            await _userService.LogoutAsync();
            return Ok("Logged out");
        }

        [HttpGet("me")]
        public async Task<IActionResult> Me()
        {
            var isAuthenticated = User.Identity?.IsAuthenticated ?? false;
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var userName = User.Identity?.Name;

            return Ok(new
            {
                isAuthenticated,
                userId,
                userName
            });
        }
    }
}
