import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  public isLoggedIn: boolean = false;

  constructor(private router: Router) {
    this.isLoggedIn = localStorage.getItem('token') ? true : false; 
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    this.isLoggedIn = false;

    this.router.navigate(['']);
  }
}
