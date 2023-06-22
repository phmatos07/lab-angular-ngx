import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Route, RouterModule } from '@angular/router';
import { ROUTES } from '../app.routes';

@Component({
  selector: 'lab-sidenav',
  standalone: true,
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  imports: [NgFor, RouterModule, MatListModule, MatIconModule, MatDividerModule]
})
export class SidenavComponent implements OnInit {

  readonly ROUTES: Pick<Route, "path" | "title">[] = ROUTES;

  constructor() { }

  ngOnInit(): void { }
}
