
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

CREATE TABLE Favorites (
	
    userID int not null,
    recipeId int not null,   
	IsFavorite bit,
	favoriteDescription nvarchar(max),
	CONSTRAINT PK_Favorite PRIMARY KEY (userID, recipeId),
	CONSTRAINT FK_User FOREIGN KEY (userID) REFERENCES Users(userID),
    CONSTRAINT FK_Recipe FOREIGN KEY (recipeId) REFERENCES Recipe(recipeId),
	 
    
   
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








