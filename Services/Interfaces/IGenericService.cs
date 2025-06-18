using technology_store_asp.Models;
using technology_store_asp.Data;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace technology_store_asp.Services.Interfaces{

    public interface IGenericService<T> where T : class
    {
        Task<List<T>> GetAllAsync();
        Task<T> GetByIdAsync(int id);
        Task<T> AddAsync(T entity);
        Task<T> UpdateAsync(T entity);
        Task DeleteAsync(int id);
    }
}