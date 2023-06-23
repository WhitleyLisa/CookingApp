import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe, Result } from './recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeApiService{

  constructor(private http: HttpClient) { }

  private readonly url = 'https://localhost:7276/api';
  
  GetRecipe(recipeName: string): Observable<Result[]>{
    return this.http.get<Result[]>(this.url + '/Home/GetRecipe/' + recipeName);
  }
  
}
