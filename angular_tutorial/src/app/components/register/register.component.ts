import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {
  public passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;

  public user: User = {
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  public userForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(this.passwordPattern)
    ]),

    confirmPassword: new FormControl('', 
      [
        Validators.required, 
      ])
  });

  public submitUser() {
    console.log("User submitted");
    alert("User submitted");
  }

}
