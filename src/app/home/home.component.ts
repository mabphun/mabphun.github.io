import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../_services/language.service';
import { Texts } from '../_models/text.model';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public languageService = inject(LanguageService)
  public texts = Texts

  constructor(
    private meta: Meta
  ){
    meta.addTags([
      { name: 'description', content: 'Itt található az önéletrajzom' },
      { name: 'keywords', content: 'mabphun, bemutatkozás, önéletrajz' }
    ])
  }
}
