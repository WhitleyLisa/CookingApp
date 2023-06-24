import { Component, OnInit } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service'
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Favorite } from '../favorite';
import { Result } from '../recipe';
import { UserRecipe } from '../user-recipe';



@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{
  userFavorites: any[] = [{userId: 1,
    recipeId: 26,
    IsFavorite: true,
    favoriteDescription: "This is a cool fqvorite and it works"}];


  recipeFavorite: any[] = [];


  constructor(private recipeApiService: RecipeApiService, private http: HttpClient) { }

  ngOnInit(): void {
    this.GetUserFavorites();
    this.GetRecipeDetailsByRecipeId();
  }

  GetUserFavorites() {
    this.recipeApiService.GetUserFavorites(1)
      .subscribe(
        (response) => {
          this.userFavorites = response;

          console.log(this.userFavorites);
 
        }
      );
  }

  GetRecipeDetailsByRecipeId() {

    for (const favorite of this.userFavorites) {
      console.log(favorite.recipeId);

      /* this.recipeApiService.GetRecipeById(favorite.recipeId)
    .subscribe(
      (response) => {
        this.recipeFavorite = response;

        console.log("RECIPE FAVORITE!!!", this.recipeFavorite)
      }) */

    }


  }


}
