import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ability } from '../models/ability';


@Injectable({
  providedIn: 'root'
})
export class AbilityService {
  private apiUrl = 'https://pokeapi.co/api/v2/'

  constructor(private http: HttpClient) { }

  // public getAbilities(): Observable<Ability[]> {
  //   return this.http.get<AbilityResponse>(this.apiUrl).pipe(
  //     map((response: AbilityResponse) => response.results.map((item) => ({ name: item.name })))
  //   );
  // }
}
