import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../models/iproject.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApiService {
  projectsUrl = 'http://localhost:8080/v1/api/projects';

  private http = inject(HttpClient);

  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.projectsUrl);
  }
}
