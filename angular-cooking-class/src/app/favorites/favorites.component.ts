import { Component, OnInit } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service'
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Favorite } from '../favorite';



@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{

  userFavorites: any;

  constructor(private recipeApiService: RecipeApiService, private http: HttpClient,) { }

  ngOnInit(): void {
    this.GetUserFavorites();
    
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


}
