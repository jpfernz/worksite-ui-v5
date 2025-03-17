import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  imports: [MatButtonModule],
  template: `
    <p>navbar goes here</p>
    <button mat-flat-button>Click me!</button>
  `,
})
export class NavbarComponent {}
