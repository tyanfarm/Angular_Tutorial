import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  // templateUrl: './home.component.html',
  templateUrl: './home.component.pug',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  constructor(private scroller: ViewportScroller) { }

  scrollToSection(sectionId: string): void {
    this.scroller.scrollToAnchor(sectionId);
  }
}
