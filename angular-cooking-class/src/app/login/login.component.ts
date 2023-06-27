import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeApiService } from '../recipe-api.service';
import { HttpClient } from '@angular/common/http';
import { Users } from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username: string;
    password: string;

    userMessage: string | null = null;

    user: Users = {
      userId: 0,
      userName: '',
      userPassword: '',
      userEmail: '',
      userPhone: ''
    };

    constructor(private recipeApiService: RecipeApiService, private http: HttpClient, private router: Router) {
      this.username = '';
      this.password = '';
    }

    login(): void {
      // Perform login logic here, e.g., validate credentials, make API calls, etc.
      console.log(`Username: ${this.username}`);
      console.log(`Password: ${this.password}`);
      
    this.recipeApiService.GetUsers(this.username).subscribe(
      (response: Users) => {
        console.log('Get User:', response);
        if (response.userPassword === this.password) {
          this.router.navigate(['/home']);
          this.userMessage = '';
         }
         else {
          this.userMessage = 'Login error. Please check the password';
         }
       });
    }



}