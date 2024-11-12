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
  public abilityList: Ability[] = [];
  public currentPage: number = 1;
  
  constructor(private abilityService: AbilityService) {

  }
  
  ngOnInit() {
    this.fetchData(this.currentPage);
  }

  public fetchData(page: number)
  {
    this.abilityService.getPokemonAbilities((page - 1) * 12, 12).subscribe((data: Ability[]) => {
      this.abilityList = data;
    });
  }

  public goToPage(page: number) 
  {
    if (page >= 1) {
      this.currentPage = page;
      this.fetchData(this.currentPage);
    }
  }


}
