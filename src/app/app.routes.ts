import { Route } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home.component';

export const appRoutes: Route[] = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
];
