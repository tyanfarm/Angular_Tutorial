import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ability } from 'src/app/models/ability';
import { AbilityService } from 'src/app/services/ability.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styles: [
  ]
})
export class PokemonComponent implements OnInit {
  abilityList: Array<Ability> = new Array<Ability>(); 
  
  constructor(private http: HttpClient) {

  }
  
  ngOnInit(): void {
    this.fetchDetails();
  }

  public fetchDetails() {
    this.http.get('https://pokeapi.co/api/v2/ability/').subscribe(
      (res: any) => {
        console.log(res)
      }
    );
  }
}
