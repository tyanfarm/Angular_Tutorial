import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_URL } from '../tokens/token';
import { Observable } from 'rxjs';
import { AuthToken } from '../models/auth-token';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, @Inject(API_URL) public apiUrl: string) { }

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

}
