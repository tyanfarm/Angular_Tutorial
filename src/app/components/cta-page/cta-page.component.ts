import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cta-page',
  templateUrl: './cta-page.component.html',
  styleUrls: ['./cta-page.component.sass']
})
export class CtaPageComponent {
  gridCols = 2;
  rowHeight = '600px';

  // Catch breakpoint event
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 810px) and (max-width: 1439px)', '(min-width: 1440px'])
      .subscribe((result) => {
        if (result.breakpoints['(min-width: 1440px']) {
          this.gridCols = 2;
          this.rowHeight = '600px';
        }
        else {
          this.gridCols = 1;
          this.rowHeight = '450px';
        }
      })
  }
}
