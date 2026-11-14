import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ResourceIdDirective } from '../../directives/resource-id.directive';
import { StackTracesService } from './stack-traces.service';

@Component({
    selector: 'lab-stack-traces',
    templateUrl: './stack-traces.component.html',
    styleUrls: ['./stack-traces.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        MatButtonModule,
        ResourceIdDirective
    ]
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
