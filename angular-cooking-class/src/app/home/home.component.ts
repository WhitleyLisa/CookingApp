import { Component, OnInit } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service'
import { Ingredient, Instruction, Nutrition, Recipe, Result, Section } from '../recipe';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{  
  results: Result[] = [];
  /* recipes: Recipe[] = [];
  nutritions: Nutrition[] = [];
  instructions: Instruction[] = [];
  ingerdients: Ingredient[] = [];
  sections: Section[] = [];
  components: Component[] = [];  */
  constructor(private recipeApiService: RecipeApiService, private http: HttpClient,){}

  

  
  
  ngOnInit(): void { 
  }
  getRecipe(recipeName: string) { 
    this.recipeApiService.GetRecipe(recipeName).subscribe(
      (response: any) => {
        this.results = response.results;
        console.log(this.results);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
  onSubmit(form: NgForm) {
    if (form.valid) {
      const recipeName = form.value.recipeName;
      this.getRecipe(recipeName);
    }
  }}
