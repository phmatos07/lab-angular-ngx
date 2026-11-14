
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
@Component({
    selector: 'lab-root',
    imports: [
    RouterOutlet,
    HeaderComponent,
    SidenavComponent,
    MatSidenavModule
],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggleSidenav = false;
}
