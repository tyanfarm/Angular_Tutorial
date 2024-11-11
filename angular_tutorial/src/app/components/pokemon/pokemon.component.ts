import { Component } from '@angular/core';
import { Ability } from 'src/app/models/ability';
import { AbilityService } from 'src/app/services/ability.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styles: [
  ]
})
export class PokemonComponent {
  // abilityList: Array<Ability> = new Array<Ability>(); 
  abilityList: Ability[] = [];
  
  constructor(private abilityService: AbilityService) {

  }
  
  
  ngOnInit() {
    this.abilityService.getPokemonAbilities(0, 48).subscribe((data: Ability[]) => {
      this.abilityList = data;
    });
  }
    

  // ngOnDestroy() {

  // }


}
