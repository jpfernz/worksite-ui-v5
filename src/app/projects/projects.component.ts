import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ProjectsStore } from './state/projects.store';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [JsonPipe],
  providers: [ProjectsStore],
  template: `
    <h3>Projects</h3>
    <p>Projects: {{ store.projects() | json }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit {
  readonly store = inject(ProjectsStore);

  ngOnInit() {
    this.store.loadProjects();
    // const projects$ = this.store.loadProjects();
    console.log(`loading projects..`);
  }
}
