import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  // providers: [
  //   { provide: LocationStrategy, useClass: HashLocationStrategy},
  // ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MABPHUN';

  constructor(
    private titleService: Title,
    private meta: Meta
  ){
    titleService.setTitle(this.title)
    meta.addTags([
      { name: 'description', content: 'Molnár Ákos Benedek vagyok, szoftverfejlesztő.' },
      { name: 'keywords', content: 'mabphun, projektek, önéletrajz' }
    ])
  }
}
