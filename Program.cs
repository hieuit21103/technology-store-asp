using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using technology_store_asp.Data;
using technology_store_asp.Models;
using technology_store_asp.Services;
using technology_store_asp.Services.Interfaces;
using technology_store_asp.Seeders;

var builder = WebApplication.CreateBuilder(args);

DotNetEnv.Env.Load();
DotNetEnv.Env.TraversePath().Load();

// Add services to the container
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    {
        var host=Environment.GetEnvironmentVariable("DB_HOST");
        var database=Environment.GetEnvironmentVariable("DB_DATABASE");
        var username=Environment.GetEnvironmentVariable("DB_USERNAME");
        var password=Environment.GetEnvironmentVariable("DB_PASSWORD");
        var connectionString=$"Server={host};Database={database};User={username};Password={password};Charset=utf8mb4";
        options.UseMySql(
            connectionString,
            ServerVersion.AutoDetect(connectionString)
        );
    }
);

builder.Services.AddScoped<IGenericService<Product>, ProductService>();
builder.Services.AddScoped<IGenericService<Category>, CategoryService>();
builder.Services.AddScoped<IGenericService<CartItem>, CartItemService>();
builder.Services.AddScoped<IGenericService<Order>, OrderService>();

builder.Services.AddScoped<ApplicationUserService>();
builder.Services.AddScoped<JwtService>();

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = Environment.GetEnvironmentVariable("JWT_ISSUER") ?? "localhost",
        ValidAudience = Environment.GetEnvironmentVariable("JWT_AUDIENCE") ?? "localhost",
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Environment.GetEnvironmentVariable("JWT_KEY") ?? "your-secret-key-here-change-this-in-production"))
    };
});

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("Admin", policy => policy.RequireRole("Admin"));
});

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

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<ApplicationDbContext>();
    context.Database.EnsureCreated();
    SeedRole.SeedRolesAsync(services).Wait();
    Console.WriteLine("Roles seeded");
    SeedUser.SeedUsersAsync(services).Wait();
    Console.WriteLine("Users seeded");
    SeedUserRole.SeedUserRolesAsync(services).Wait();
    Console.WriteLine("User roles seeded");
}

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.Run();
