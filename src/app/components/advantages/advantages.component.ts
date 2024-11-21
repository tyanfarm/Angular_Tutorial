import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-advantages',
  // templateUrl: './advantages.component.html',
  templateUrl: './advantages.component.pug',
  styleUrls: ['./advantages.component.sass']
})
export class AdvantagesComponent implements AfterViewInit {
  ngAfterViewInit() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 1 }); 

    elements.forEach((el) => observer.observe(el));
  }
}
