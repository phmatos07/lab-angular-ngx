import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';

@Component({
    imports: [CommonModule],
    selector: 'let',
    templateUrl: './@let.component.html',
    styleUrls: ['./@let.component.scss']
})
export class LetComponent {
  users$: Observable<User[]> = of([
    { name: 'John', surname: 'Smith' },
    { name: 'Phelipe', surname: 'Matos' },
    { name: 'João', surname: 'Silva' },
    { name: 'Maria', surname: 'Santos' },
  ]);
}
