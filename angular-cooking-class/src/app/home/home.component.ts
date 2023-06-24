import { Component, OnInit } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service'
import { Ingredient, Instruction, Nutrition, Recipe, Result, Section } from '../recipe';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Favorite } from '../favorite';
import { UserRecipe } from '../user-recipe';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  results: Result[] = [];
  /* recipes: Recipe[] = [];
  nutritions: Nutrition[] = [];
  instructions: Instruction[] = [];
  ingerdients: Ingredient[] = [];
  sections: Section[] = [];
  components: Component[] = [];  */
  constructor(private recipeApiService: RecipeApiService, private http: HttpClient,) { }


  ngOnInit(): void {
  }

  getRecipe(recipeName: string) {
    const recipeCount = 2;
    this.recipeApiService.GetRecipe(recipeName, recipeCount).subscribe(
      (response: any) => {
        this.results = response.results;
        console.log(this.results);
      }
    );
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const recipeName = form.value.recipeName;
      this.getRecipe(recipeName);
    }
  }

  updateFavoriteStatus(userId: number, recipesid: number, recname: string, recdescription: string) {
    if (recipesid != undefined) {

      let newUserRecipe: UserRecipe = {

        recipeId: 1,
        Id: recipesid,
        Name: recname,
        Description: recdescription

      };

      this.recipeApiService.AddRecipe(newUserRecipe).subscribe(
        (response: UserRecipe) => {
          console.log('Recipe Added:', response);
         
          const newFavorite: Favorite = {
            userId: userId,
            recipeId: response.recipeId,
            IsFavorite: true,
            favoriteDescription: "This is my favorite"
          };

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
