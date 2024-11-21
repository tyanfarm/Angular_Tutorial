import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-benefits',
  // templateUrl: './benefits.component.html',
  templateUrl: './benefits.component.pug',
  styleUrls: ['./benefits.component.sass']
})
export class BenefitsComponent implements AfterViewInit {
  ngAfterViewInit() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.5 }); 

    elements.forEach((el) => observer.observe(el));
  }
}
