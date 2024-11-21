import { AfterViewInit, Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-hero-page',
  // templateUrl: './hero-page.component.html',
  templateUrl: './hero-page.component.pug',
  styleUrls: ['./hero-page.component.sass']
})
export class HeroPageComponent implements AfterViewInit {
  public iosUrl = environment.iosUrl;
  public androidUrl = environment.androidUrl;

  urlWidth = 0;

  // Catch breakpoint event
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 810px) and (max-width: 1439px)', '(min-width: 1440px)', '(max-width: 809px)'])
      .subscribe((result) => {
        if (result.breakpoints['(max-width: 809px)']) {
          this.urlWidth = 100;
        }
        else {
          this.urlWidth = 150;
        }
      })
  }

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
