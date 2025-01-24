import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TypePersontEnum } from './type-client.enum';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'switch',
  templateUrl: './@switch.component.html',
  styleUrls: ['./@switch.component.scss'],
})
export class SwitchComponent implements OnInit {
  typePerson = TypePersontEnum.FISICA;
  time = 3000;

  ngOnInit(): void {
    setTimeout(() => {
      this.typePerson = TypePersontEnum.JURIDICA;
    }, this.time);
  }
}
