using BookStore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Diagnostics;
using System.Text.Json;
using BookStore.Services;
using BookStore.Controllers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<MyContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("CRUDS"))
           .EnableSensitiveDataLogging());

builder.Services.AddScoped<EbookService>();
builder.Services.AddScoped<BookService>();
builder.Services.AddHttpClient<EbooksController>();


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<GiftCardService>();

// Register HttpClient
builder.Services.AddHttpClient();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();

// Ensure static files are served before the routing and authorization
app.UseStaticFiles();

app.UseCors(builder =>
{
    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
});

// Ensure routing is configured before authorization
app.UseRouting();

app.UseAuthorization();

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

app.Run();
