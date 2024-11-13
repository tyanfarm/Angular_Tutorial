import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
}
