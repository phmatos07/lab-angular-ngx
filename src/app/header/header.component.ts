import { Component, EventEmitter, Output, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ResourceIdDirective } from '../directives/resource-id.directive';
import { PROJECT_NAME } from '../models/default-data.const';

@Component({
  selector: 'lab-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    ResourceIdDirective
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output()
  toggleSidenav = new EventEmitter<boolean>();

  _toggleSidenav = signal(false);
  readonly PROJECT_NAME = PROJECT_NAME;

  openSidenav(): void {
    this._toggleSidenav.update(valor => !valor);
    this.toggleSidenav.emit(this._toggleSidenav());
  }
}
