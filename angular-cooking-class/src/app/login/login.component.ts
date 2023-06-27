import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username: string;
    password: string;

    constructor() {
      this.username = '';
      this.password = '';
    }

    login(): void {
      // Perform login logic here, e.g., validate credentials, make API calls, etc.
      console.log(`Username: ${this.username}`);
      console.log(`Password: ${this.password}`);
    }
}