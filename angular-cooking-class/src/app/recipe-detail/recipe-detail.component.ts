
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeApiService } from '../recipe-api.service';
import { Result } from '../recipe';
import { UserRecipe } from '../user-recipe';
import { Favorite } from '../favorite';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeId!: any;
  recipes: Result[] = [];
  userId!: number;
  
  constructor(private route: ActivatedRoute, private recipeApiService: RecipeApiService) {

   }

  ngOnInit(): void {
    const recipeIdParam: any = this.route.snapshot.paramMap.get('recipeId');
    console.log(recipeIdParam + " RecipeIdParam");
    this.recipeId = recipeIdParam !== null ? recipeIdParam : "";
    console.log(this.recipeId + " RecipeId");
    this.getRecipe(recipeIdParam);
  }

  getRecipe(recipeId: string) {
    console.log(recipeId);
    const recipeCount = 1;
    this.recipeApiService.GetRecipe(recipeId, recipeCount).subscribe(
      (response: any) => {
        this.recipes = response.results;
        console.log(this.recipes);
        console.log("Here cause Ashwath says to");
      }
    );
  }

  updateFavoriteStatus(recipesid: number, recname: string, recdescription: string, thumbnailUrl: string, thumbnail_alt_text: string) {
    if (recipesid != undefined) {
      // Create a new Favorite object for the user and the added recipe
      let newUserRecipe: UserRecipe = {

        recipeId: 1,
        Id: recipesid,
        Name: recname,
        Description: recdescription,
        thumbnailUrl: thumbnailUrl,
        thumbnailAltText: thumbnail_alt_text,


      };

      // Add the new recipe to the recipe API service
      this.recipeApiService.AddRecipe(newUserRecipe).subscribe(
        (response: UserRecipe) => {
          console.log('Recipe Added:', response);
         
          // Create a new Favorite object for the user and the added recipe
          const newFavorite: Favorite = {
            userId: this.userId,
            recipeId: response.recipeId,
            IsFavorite: true,
            favoriteDescription: "This is my favorite"
          };

          // Update the favorite status by adding the new favorite to the recipe API service
          this.recipeApiService.AddFavorites(newFavorite).subscribe(
            (response: any) => {
              console.log('Favorite updated:', response);
            }
          );

        }
      );
    }
  }
}
