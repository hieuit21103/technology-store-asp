using technology_store_asp.Data;
using Microsoft.EntityFrameworkCore;
using technology_store_asp.Models;
using Microsoft.AspNetCore.Identity;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))
    )
);

builder.Services.AddAuthentication();
builder.Services.AddAuthorization();

builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddDefaultTokenProviders();

builder.Services.AddControllers();
builder.Services.AddOpenApi();

var app = builder.Build();

// Middleware pipeline
app.UseHttpsRedirection();

app.UseStaticFiles();
app.UseDefaultFiles();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.MapFallbackToFile("index.html");

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.Run();
