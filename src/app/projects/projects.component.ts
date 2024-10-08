import { Component, inject } from '@angular/core';
import { ProjectService } from '../_services/project.service';
import { ProjectModel } from '../_models/project.model';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../_services/language.service';
import { Texts } from '../_models/text.model';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule, 
    MatDividerModule, 
    MatIconModule, 
    MatListModule,
    RouterModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectService = inject(ProjectService)
  languageService = inject(LanguageService)
  public texts = Texts

  constructor(
    private meta: Meta
  ){
    meta.addTags([
      { name: 'description', content: 'Itt található a projektjeim listája' },
      { name: 'keywords', content: 'mabphun, projektek, tapasztalat' }
    ])
  }
}
