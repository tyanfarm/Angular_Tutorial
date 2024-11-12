import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  constructor(public authService: AuthService) { }

  public logOut() {
    this.authService.logout();
  }
}
