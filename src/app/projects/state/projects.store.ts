import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Project } from '../models/project.model';
import { computed, inject } from '@angular/core';
import { ProjectsApiService } from '../data/projects-api.service';
import { pipe, switchMap, tap } from 'rxjs';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

type ProjectsState = {
  projects: Project[];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: ProjectsState = {
  projects: [],
  isLoading: false,
  filter: { query: '', order: 'asc' },
};

export const ProjectsStore = signalStore(
  withState(initialState),
  withComputed((store) => ({
    projects: computed(() => store.projects()),
  })),
  withMethods((store, projectsService = inject(ProjectsApiService)) => ({
    loadProjects: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() => projectsService.getProjects()),
        tap((projects) => patchState(store, { projects, isLoading: false }))
      )
    ),
  }))
);
