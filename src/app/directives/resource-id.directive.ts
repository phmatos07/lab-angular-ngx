import { Directive, ElementRef, Input, OnInit } from '@angular/core';

export enum TypeAction {
  READ = 'read',
  CLICK = 'click',
  SELECT = 'select',
  INPUT = 'input'
}

@Directive({
  standalone: true,
  selector: '[idQa]'
})
export class ResourceIdDirective implements OnInit {

  @Input('idQa')
  element!: string;

  @Input('idQaAction')
  action?: string;

  private readonly PROJECT_NAME = 'lab-angular-ngx';

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.el.nativeElement.id = this.validate(this.element, this.action);
  }

  private validate(element: string, action?: string): string {
    try {
      if (!element || element === '') {
        throw new Error('Por favor, digite um nome para representar o elemento.');
      }
      return `${this.PROJECT_NAME}-${element}-${this.validateTypeAction(action)}`;

    } catch (error) {
      console.error(error);
    }
    return "";
  }

  private validateTypeAction(action?: string): string {
    try {

      if (action && Object.values(TypeAction).includes(action as TypeAction)) {
        return action;
      }

      if (!action) {
        return TypeAction.CLICK;
      }
      throw new Error('Por favor, digite um tipo de ação válida.');

    } catch (error) {
      console.group('VALIDAÇÃO DO TIPO DE AÇÃO');
      console.error(error);
      console.info('Ações válidas: \n');
      Object.values(TypeAction).forEach((value, index) => console.info(` ${index + 1}°. ${value}`));
      console.groupEnd();
      return TypeAction.CLICK;
    }
  }
}
