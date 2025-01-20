import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  standalone: true,
  imports: [FormsModule, MatInputModule],
  selector: 'if',
  templateUrl: './@if.component.html',
  styleUrls: ['./@if.component.scss'],
})
export class IfComponent {
  value01 = 0;
  value02 = 10;
}
