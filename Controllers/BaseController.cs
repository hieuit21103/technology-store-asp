using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using technology_store_asp.Services.Interfaces;
using technology_store_asp.Services;

namespace technology_store_asp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseController<T> : ControllerBase where T : class
    {
        protected readonly IGenericService<T> _service;

        public BaseController(IGenericService<T> service)
        {
            _service = service;
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var entities = await _service.GetAllAsync();
                return Ok(entities);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("id/{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {
                var entity = await _service.GetByIdAsync(id);
                return Ok(entity);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("add")]
        public async Task<IActionResult> Add(T entity)
        {
            try
            {
                var addedEntity = await _service.AddAsync(entity);
                return Ok(addedEntity);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("update")]
        public async Task<IActionResult> Update(T entity)
        {
            try
            {
                var updatedEntity = await _service.UpdateAsync(entity);
                return Ok(updatedEntity);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("delete")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _service.DeleteAsync(id);
                return Ok("Deleted successfully");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }   
    }
}
