import { Component, OnInit } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service'
import { Recipe } from '../recipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{  
 
 
  
  constructor(private recipeApiService: RecipeApiService){
    
  }


  recipe: any; // Recipe[] = [];
  
  ngOnInit(): void {
    this.getRecipe();
    
  }
  
  getRecipe() { this.recipeApiService.GetRecipe().subscribe((response) => {
    this.recipe = response;
    
    console.log(this.recipe);});
  
  } 

}
