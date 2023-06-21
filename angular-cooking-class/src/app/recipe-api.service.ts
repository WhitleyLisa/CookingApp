import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeApiService{

  constructor(private http: HttpClient) { }

  private readonly url = 'https://localhost:7276/api';
  
  GetRecipe(): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.url + '/HomeController');
  }
  
}
