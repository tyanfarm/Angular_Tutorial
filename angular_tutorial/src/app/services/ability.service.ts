import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_URL } from '../tokens/token';
import { map, Observable } from 'rxjs';
import { Ability } from '../models/ability';


@Injectable({
  providedIn: 'root'
})
export class AbilityService {

  constructor(private httpClient: HttpClient, @Inject(API_URL) public apiUrl: string) { }

  // public getPokemonAbilities(): Observable<Ability[]>{
  //   return this.httpClient.get<Ability[]>(this.apiUrl + 'ability');
  // }
  public getPokemonAbilities(offset: number, limit: number): Observable<Ability[]> {
    return this.httpClient.get<any>(this.apiUrl + `ability?offset=${offset}&limit=${limit}`).pipe(
      map((res) => res.results)     
    );
  }
}
