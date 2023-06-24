import { Component, OnInit } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service'
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Favorite } from '../favorite';
import { Result } from '../recipe';
import { UserRecipe } from '../user-recipe';
import { Favoriterecipe } from '../favoriterecipe';
import { Router } from '@angular/router';



@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{
  userFavorites: any[] = [];



  recipeFavorite: Favoriterecipe[] =[];



  constructor(private recipeApiService: RecipeApiService, private http: HttpClient, private router: Router) { 
    this.recipeFavorite = [];
  }

  ngOnInit(): void {
    // this.GetUserFavorites();
    this.GetRecipeDetailsByRecipeId();
  }

  /* GetUserFavorites() {
    this.recipeApiService.GetUserFavorites(1)
      .subscribe(
        (response) => {
          this.userFavorites = response;

          console.log(this.userFavorites);
 
        }
      );
  } */

  GetRecipeDetailsByRecipeId() {

    this.recipeApiService.GetFavoriteRecipe(1)
      .subscribe(
        (response) => {
          this.recipeFavorite = response;

          console.log(response);
 
        }
      );
  }

/*   DeleteFavorite(favoriteId: number) {

    this.recipeApiService.deleteFavorite(favoriteId)
      .subscribe(
        (response) => {
          this.recipeFavorite = response;

          console.log(response);
 
        }
      );
      this.GetRecipeDetailsByRecipeId();
    this.router.navigateByUrl('favorites', { skipLocationChange: true }).then(() => {
      this.router.navigate(['favorites']);
    });



  
} */

DeleteFavorite(favorite: Favoriterecipe) {
  favorite.isFavorite = !favorite.isFavorite; // Toggle the isFavorite property
console.log(favorite.favoriteId)
  // Update the favorite in the database
  this.recipeApiService.deleteFavorite(favorite.favoriteId).subscribe(
    (response: any) => {
      console.log('Favorite updated:', favorite);
    }
  );

  
}

}
