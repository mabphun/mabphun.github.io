import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Title } from '@angular/platform-browser';

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
    private titleService: Title
  ){
    titleService.setTitle(this.title)
  }
}
