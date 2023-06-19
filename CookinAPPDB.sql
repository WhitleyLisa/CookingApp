
CREATE DATABASE CookingAppDB;
 USE CookingAppDB; 

CREATE TABLE Recipe (
     recipeId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	 recipeName nvarchar(50),
     videoUrl nvarchar(Max),     
     description nvarchar(Max)
	 );

	 CREATE TABLE Ingredient (
     ingredientId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	 recipeId int FOREIGN KEY (recipeId) REFERENCES Recipe(recipeId),
     ingredientname nvarchar(50),     
     quantity decimal,
	 measurement nvarchar(30),
	 instruction nvarchar(Max)
	 
	 );

	CREATE TABLE Users (
	userID int NOT NULL IDENTITY(1,1)  PRIMARY KEY,
    userName nvarchar(40),
	userPassword nvarchar(20),
	userEmail nvarchar(50),
	userPhone nvarchar(50)
   
);

DROP TABLE dbo.Favorites;

 CREATE TABLE Favorites (
	
	favoriteId int NOT NULL IDENTITY(1,1)  PRIMARY KEY,
	userID int FOREIGN KEY (userID) REFERENCES Users(userID),    
    recipeId int FOREIGN KEY (recipeId) REFERENCES Recipe(recipeId),   
	IsFavorite bit,
	favoriteDescription nvarchar(max)
    
   
); 


CREATE TABLE Nutrition (
     nutritionId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	 recipeId int FOREIGN KEY (recipeId) REFERENCES Recipe(recipeId),
     calories nvarchar(50),     
     protein nvarchar(50),
	 fat nvarchar(50),
	 sugar nvarchar(50),
	 carbs nvarchar(50),
	 fiber nvarchar(50)
	 
	 );








