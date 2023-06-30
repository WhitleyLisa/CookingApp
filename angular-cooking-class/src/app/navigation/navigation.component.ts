import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {

  username!: string;
  


  constructor( private cookieService: CookieService) {}

  ngOnInit(): void {
    this.username = this.cookieService.get('username').toUpperCase();
 
  }
}
