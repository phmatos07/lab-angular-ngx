import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { StackTracesService } from './stack-traces.service';

@Component({
  selector: 'lab-stack-traces',
  standalone: true,
  templateUrl: './stack-traces.component.html',
  styleUrls: ['./stack-traces.component.scss'],
  imports: [MatButtonModule]
})
export class StackTracesComponent {

  readonly TITLE = 'Rastreamentos de pilha melhorado (Stack Traces)';

  constructor(
    private service: StackTracesService
  ) { }

  throwError(value: string): void {
    this.service.throwError(value);
  }
}
