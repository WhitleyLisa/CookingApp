import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe, Result } from './recipe';
import { Observable } from 'rxjs';
import { Favorite } from './favorite';
import { UserRecipe } from './user-recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeApiService{

  constructor(private http: HttpClient) { }

  private readonly url = 'https://localhost:7276/api';
  
  GetRecipe(recipeName: string, count: number): Observable<Result[]>{
    return this.http.get<Result[]>(this.url + '/Home/GetRecipe/' + recipeName + '/' + count);
  }

  GetUserFavorites(UserId: number): Observable<Result[]>{
    return this.http.get<Result[]>(this.url + '/Favorites/GetUserFavorites/' + UserId);
  }

  AddFavorites(favorites: Favorite): Observable<Favorite>{
    return this.http.post<Favorite>(this.url + '/Favorites/AddFavorite', favorites );
  }

  AddRecipe(userrecipes: UserRecipe): Observable<UserRecipe>{
    return this.http.post<UserRecipe>(this.url + '/Recipe',userrecipes);
  }

  GetRecipeById(RecipeId: number): Observable<Result[]>{
    return this.http.get<Result[]>(this.url + '/Recipe/GetRecipeById/' + RecipeId);
  }

  GetLastRecipe(): Observable<UserRecipe>{
    return this.http.get<UserRecipe>(this.url + '/Recipe/GetLastRecipe');
  }

  deleteFavorite(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/Favorites/DeleteFavorite/${id}`);
  }
  
}
