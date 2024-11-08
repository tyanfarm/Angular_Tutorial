import { Component, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ],
})
export class HomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    margin: 8,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 200,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      }
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false  // Tạm dừng khi người dùng di chuột vào carousel
  }

  imagesList = [
    "assets/images/1.jpg",
    "assets/images/2.jpg",
    "assets/images/3.jpg",
    "assets/images/4.jpg",
  ]

  onTranslate(event: any) {
    console.log("Autoplay: ", event.relatedTarget.settings.autoplay);
  }
}
