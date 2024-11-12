import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  private token: string = "";
  public currentTab: string = "overview";
  public user: User = new User();

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

  public changeTab(tabName: string) {
    this.currentTab = tabName;
  }

}
