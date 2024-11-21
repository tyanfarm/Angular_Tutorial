import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-features',
  // templateUrl: './features.component.html',
  templateUrl: './features.component.pug',
  styleUrls: ['./features.component.sass']
})
export class FeaturesComponent implements AfterViewInit {
  gridCols = 7;
  rowHeight = '350px';
  colLeftFeatures = 2;
  rowLeftFeatures = 1;
  colRightFeature = 3;
  rowRightFeature = 2;

  // Catch breakpoint event
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 810px) and (max-width: 1439px)', '(max-width: 809px)'])
      .subscribe((result) => {
        if (result.breakpoints['(min-width: 810px) and (max-width: 1439px)']) {
          this.gridCols = 2;
          this.colLeftFeatures = 1;
          this.rowLeftFeatures = 1;
          this.colRightFeature = 2;
          this.rowRightFeature = 2;
          this.rowHeight = '300px';
        }
        else if (result.breakpoints['(max-width: 809px)']) {
          this.gridCols = 1;
          this.colLeftFeatures = 1;
          this.rowLeftFeatures = 1;
          this.colRightFeature = 1;
          this.rowRightFeature = 1;
          this.rowHeight = '300px';
        }
        else {
          this.gridCols = 7;
          this.rowHeight = '350px';
          this.colLeftFeatures = 2;
          this.rowLeftFeatures = 1;
          this.colRightFeature = 3;
          this.rowRightFeature = 2;
        }
      })
  }

  ngAfterViewInit() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const elementsRight = document.querySelectorAll('.animate-on-scroll-right');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 }); 

    elements.forEach((el) => observer.observe(el));
    elementsRight.forEach((el) => observer.observe(el));
  }
}
