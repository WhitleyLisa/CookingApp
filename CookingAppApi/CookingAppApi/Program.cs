using CookingAppApi;
using CookingAppApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddHttpClient<RecipeService>(c =>
{
    // string apiKey = builder.Configuration.GetValue<string>("AnimalApi:ApiKey");
    string apiKey = Secret.ApiKey;
    c.BaseAddress = new Uri("https://tasty.p.rapidapi.com/recipes/list?from=0&size=5");
    c.DefaultRequestHeaders.Add("X-RapidAPI-Key", apiKey);
    c.DefaultRequestHeaders.Add("X-RapidAPI-Host", "tasty.p.rapidapi.com");
});

var app = builder.Build();





// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}



app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
