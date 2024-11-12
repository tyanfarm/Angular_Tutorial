import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  public user: User = new User();
  private token: string = "";

  constructor(private authService: AuthService) {
    this.token = localStorage.getItem('token') || "";

    if (this.token === "") {
      window.location.href = '/login';
    }
  }

  ngOnInit() {
    this.authService.getInfoUser(this.token).subscribe((data) => {
      this.user = data;
      // console.log(this.user.fullname);  
    });
  }

}
