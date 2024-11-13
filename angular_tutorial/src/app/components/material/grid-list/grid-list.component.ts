import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
})  
export class GridListComponent {
  public tiles: Tile[] = [
    // row 1
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    // vi row1 da full 4 rows nen chuyen xuong row2
    {text: 'Four', cols: 2, rows: 2, color: '#DDBDF1'},
    // row 2 da co 2/4 col ma textTwo chiem 3 cols nen chuyen xuong row3
    {text: 'Two', cols: 2, rows: 2, color: 'lightgreen'},
  ];
}
