using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using technology_store_asp.Models;
using technology_store_asp.Models.DTOs;
using technology_store_asp.Data;
using technology_store_asp.Services;

namespace technology_store_asp.Services{
    public class ApplicationUserService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public ApplicationUserService(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task<ApplicationUser> AddAsync(ApplicationUser entity)
        {
            var result = await _userManager.CreateAsync(entity);
            if (!result.Succeeded)
                throw new Exception("Không thể tạo người dùng.");
            return entity;
        }

        public async Task<ApplicationUser> UpdateAsync(ApplicationUser entity)
        {
            var result = await _userManager.UpdateAsync(entity);
            if (!result.Succeeded)
                throw new Exception("Không thể cập nhật người dùng.");
            return entity;
        }

        public async Task DeleteAsync(int id)
        {
            var user = await _userManager.FindByIdAsync(id.ToString());
            if (user == null)
                throw new Exception("Không tìm thấy người dùng.");
            await _userManager.DeleteAsync(user);
        }

        public async Task<ApplicationUser> GetByIdAsync(int id)
        {
            var user = await _userManager.FindByIdAsync(id.ToString());
            if (user == null)
                throw new Exception("Không tìm thấy người dùng.");
            return user;
        }

        public async Task<List<ApplicationUser>> GetAllAsync()
        {
            return await _userManager.Users.ToListAsync();
        }

        public async Task<ApplicationUser> LoginAsync(LoginDto entity)
        {
            var result = await _signInManager.PasswordSignInAsync(entity.Username, entity.Password, isPersistent: false, lockoutOnFailure: false);
            if (!result.Succeeded)
                throw new Exception("Sai thông tin đăng nhập.");
            return null;
        }

        public async Task<ApplicationUser> LogoutAsync()
        {
            await _signInManager.SignOutAsync();
            return null;
        }

        public async Task<ApplicationUser> RegisterAsync(RegisterDto entity)
        {
            var user = new ApplicationUser
            {
                UserName = entity.Username,
                Email = entity.Email
            };

            var result = await _userManager.CreateAsync(user, entity.Password);
            if (!result.Succeeded)
                throw new Exception("Đăng ký thất bại.");
            return user;
        }
    }
}