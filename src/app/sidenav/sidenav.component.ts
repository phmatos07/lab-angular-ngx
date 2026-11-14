import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Route, RouterModule } from '@angular/router';
import { ROUTES } from '../app.routes';
import { ResourceIdDirective } from '../shared/directives/resource-id.directive';
import { GetElementNamePipe } from './get-element-name.pipe';

@Component({
  selector: 'lab-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    RouterModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    ResourceIdDirective,
    GetElementNamePipe
  ]
})
export class SidenavComponent {
  readonly ROUTES: Pick<Route, "path" | "title">[] = ROUTES;
}
