using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authorization;
using technology_store_asp.Models;
using technology_store_asp.Models.DTOs;
using technology_store_asp.Services;

namespace technology_store_asp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "Admin")]
    public class UserController : ControllerBase
    {
        private readonly ApplicationUserService _userService;

        public UserController(ApplicationUserService userService)
        {
            _userService = userService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {
                var user = await _userService.GetByIdAsync(id);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var users = await _userService.GetAllAsync();
                return Ok(users);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("add")]
        public async Task<IActionResult> Add(ApplicationUser entity)
        {
            try
            {
                var user = await _userService.AddAsync(entity);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("update")]
        public async Task<IActionResult> Update(ApplicationUser entity)
        {
            try
            {
                var user = await _userService.UpdateAsync(entity);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("delete")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _userService.DeleteAsync(id);
                return Ok("Deleted successfully");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}