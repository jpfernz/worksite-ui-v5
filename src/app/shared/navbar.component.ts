import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MatTabsModule, RouterModule],
  template: `
    <nav mat-tab-nav-bar class="tabs" [tabPanel]="tabPanel">
      <a mat-tab-link routerLink="/home" routerLinkActive="active-link">Home</a>
      <a mat-tab-link routerLink="/projects" routerLinkActive="active-link"
        >Projects</a
      >
    </nav>
    <mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      .tabs {
        // display: inline-block;
        // background-color: #eee;
        // border-radius: 4px;
        // margin-top: 1em;
      }
      .active-link {
        color: #f20b22;
      }
    `,
  ],
})
export class NavbarComponent {}
