using technology_store_asp.Data;
using technology_store_asp.Models;
using technology_store_asp.Services;
using technology_store_asp.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace technology_store_asp.Services{
    public abstract class GenericService<T> : IGenericService<T> where T : class
    {
        protected readonly ApplicationDbContext _context;
        protected readonly DbSet<T> _dbSet;

        public GenericService(ApplicationDbContext context)
        {
            _context = context;
            _dbSet = context.Set<T>();
        }

        public virtual async Task<List<T>> GetAllAsync() => await _dbSet.ToListAsync();
        public virtual async Task<T> GetByIdAsync(int id) => await _dbSet.FindAsync(id);
        public virtual async Task<T> AddAsync(T entity)
        {
            await _dbSet.AddAsync(entity);
            await _context.SaveChangesAsync();
            return entity;
        }
        public virtual async Task<T> UpdateAsync(T entity)
        {
            _dbSet.Update(entity);
            await _context.SaveChangesAsync();
            return entity;
        }
        public virtual async Task DeleteAsync(int id)
        {
            var entity = await _dbSet.FindAsync(id);
            _dbSet.Remove(entity);
            await _context.SaveChangesAsync();
        }
    }
}
