import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../_services/language.service';
import { Texts } from '../_models/text.model';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatToolbarModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  languageService = inject(LanguageService)
  texts = Texts

  switchLanguage(){
    this.languageService.setLanguage()
  }
}
