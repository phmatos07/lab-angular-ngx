import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'let',
  templateUrl: './@let.component.html',
  styleUrls: ['./@let.component.scss'],
})
export class LetComponent {
  users$ = of([
    { name: 'John', surname: 'Smith' },
    { name: 'Phelipe', surname: 'Matos' },
    { name: 'João', surname: 'Silva' },
    { name: 'Maria', surname: 'Santos' },
  ]);

  trackBy(index: number, user: any): number | string {
    return index ? index : user.name;
  }
}
