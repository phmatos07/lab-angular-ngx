import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lab-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
