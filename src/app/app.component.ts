import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  @ViewChild(HomeComponent) homeComponent!: HomeComponent;

  scrollToSection(sectionId: string) {
    this.homeComponent.scrollToSection(sectionId); 
  }
  
}
