import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'defer',
  templateUrl: './@defer.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./@defer.component.scss'],
})
export class DeferComponent {}
