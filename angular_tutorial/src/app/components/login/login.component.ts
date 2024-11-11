import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  user: User = {
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  public submitUser() {
    console.log(this.user);
    alert("User submitted");
  }
} 
