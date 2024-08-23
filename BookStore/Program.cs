using BookStore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Diagnostics;
using System.Text.Json;
using BookStore.Services;
using BookStore.Controllers;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<MyContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("CRUDS"))
           .EnableSensitiveDataLogging());

builder.Services.AddScoped<EbookService>();
builder.Services.AddScoped<BookService>();
builder.Services.AddHttpClient<EbooksController>();
builder.Services.AddTransient<EmailService>();
builder.Services.AddSingleton<GiftCardService>();

// Configure CORS to allow requests from http://localhost:3003
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost3003",
        builder => builder
            .WithOrigins("http://localhost:3003")
            .AllowAnyHeader()
            .AllowAnyMethod());
});


// Configure JWT Authentication
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["JwtSettings:Issuer"],
            ValidAudience = builder.Configuration["JwtSettings:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JwtSettings:SecretKey"]))
        };
    });

// Register SmtpSettings
builder.Services.Configure<SmtpSettings>(builder.Configuration.GetSection("SmtpSettings"));

// Register HttpClient
builder.Services.AddHttpClient();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseCors("AllowLocalhost3003"); // Apply the CORS policy here

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

// Global exception handler middleware
app.Use(async (context, next) =>
{
    try
    {
        await next.Invoke();
    }
    catch (Exception ex)
    {
        var response = context.Response;
        response.ContentType = "application/json";
        response.StatusCode = StatusCodes.Status500InternalServerError;
        var errorResponse = new { message = ex.Message, detail = ex.StackTrace };
        await response.WriteAsync(JsonSerializer.Serialize(errorResponse));
    }
});

app.MapControllers();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
else
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.Run();
