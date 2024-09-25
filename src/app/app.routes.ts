import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    // { path: 'gallery', component: GalleryComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];
