import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  public user: User = new User();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token') || localStorage.getItem('refreshToken')) {
      this.router.navigate(['/profile']);
    }
  }

  public submitUser() {
    this.authService.loginUser(this.user.email, this.user.password)
        .subscribe(
          (data) => {
            console.log(data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('refreshToken', data.refreshToken);
            // this.router.navigate(['/profile']);
            window.location.href = '/profile';
          },
          (error) => {
            console.log(error);
          }
        )
  }

} 
