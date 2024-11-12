import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { passwordMatchValidator } from 'src/app/utils/validate/confirm-password';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent {
  private token: string = "";
  public passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;
  public user: User = new User();  
  public currentPassword: string = "";

  constructor(private authService: AuthService) {
    this.token = localStorage.getItem('token') || "";
  }

  public userForm = new FormGroup(
    {
      currentPassword: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(this.passwordPattern)
      ]),
      confirmPassword: new FormControl('', Validators.required),
    },
    {
      validators: passwordMatchValidator,
    }
  ); 

  public submitUser() {
    this.authService.changePassword(this.token, this.currentPassword, this.user.password)
      .subscribe(
        (response) => {
          console.log("Change password successfully");
          this.authService.logout();
        },
        (error) => {
          console.log("Change password failed");
        }
    );
  }
}
