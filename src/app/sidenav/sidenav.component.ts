import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Route, RouterModule } from '@angular/router';
import { ROUTES } from '../app.routes';
import { ResourceIdDirective } from '../directives/resource-id.directive';

@Component({
  selector: 'lab-sidenav',
  standalone: true,
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  imports: [
    NgFor,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    ResourceIdDirective
  ]
})
export class SidenavComponent {

  readonly ROUTES: Pick<Route, "path" | "title">[] = ROUTES;

  getElementName(path?: string): string {
    return !path || path === '' ? 'home' : path;
  }
}
