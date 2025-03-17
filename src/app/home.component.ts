import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home">
      <h1>Welcome to Worksite</h1>
      <p>
        Worksite is a project management tool that helps you keep track of your
        projects and tasks.
      </p>
    </div>
  `,
  styles: [
    `
      .home {
        margin-top: 2em;
        text-align: center;
      }
    `,
  ],
})
export class HomeComponent {}
