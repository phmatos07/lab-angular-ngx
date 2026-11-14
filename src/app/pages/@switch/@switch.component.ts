
import { Component, OnInit } from '@angular/core';
import { TypePersontEnum } from './type-client.enum';

@Component({
    imports: [],
    selector: 'switch',
    templateUrl: './@switch.component.html',
    styleUrls: ['./@switch.component.scss']
})
export class SwitchComponent implements OnInit {
  typePerson = TypePersontEnum.FISICA;
  readonly time = 3000;

  ngOnInit(): void {
    setTimeout(() => {
      this.typePerson = TypePersontEnum.JURIDICA;
    }, this.time);
  }
}
