import { Component, inject } from '@angular/core';
import { ProjectService } from '../_services/project.service';
import { ProjectModel } from '../_models/project.model';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatDividerModule, MatIconModule, MatListModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectService = inject(ProjectService)

  constructor(){
    
  }
}
