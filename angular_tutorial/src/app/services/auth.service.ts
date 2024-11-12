import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_URL } from '../tokens/token';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthToken } from '../models/auth-token';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(localStorage.getItem('token') ? true : false);
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private httpClient: HttpClient, @Inject(API_URL) public apiUrl: string, private router: Router) { }

  public loginUser(username: string, password: string) : Observable<AuthToken> {
    return this.httpClient.post<AuthToken>
      (`${this.apiUrl}/Authentication/Login`, 
        { 
          email: username, 
          password: password 
        }
      );
  }

  public getInfoUser(token: string): Observable<User> {
    return this.httpClient.get<User>(`${this.apiUrl}/User/${token}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  public changePassword(token: string, currentPassword: string, newPassword: string) {
    return this.httpClient.patch(`${this.apiUrl}/Authentication/ChangePassword`, 
    {
      token: token,
      currentPassword: currentPassword,
      newPassword: newPassword
    }, 
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
      observe: 'response' // get full response (have status code)
    });
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    this.isLoggedInSubject.next(false);

    this.router.navigate(['']);
  }

}
