using CookingAppApi;
using CookingAppApi.Models;
using CookingAppApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddScoped<RecipeDbContext>();

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddHttpClient<RecipeService>(c =>
{
    // string apiKey = builder.Configuration.GetValue<string>("AnimalApi:ApiKey");
    string apiKey = Secret.ApiKey;
    c.BaseAddress = new Uri("https://tasty.p.rapidapi.com/recipes/list/");
    c.DefaultRequestHeaders.Add("X-RapidAPI-Key", apiKey);
    c.DefaultRequestHeaders.Add("X-RapidAPI-Host", "tasty.p.rapidapi.com");
});



// Add Cors policy
builder.Services.AddCors(
    options =>
    {
        options.AddPolicy(
            name: "AllowAny",
            builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
            );
    }
    );

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAny");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
