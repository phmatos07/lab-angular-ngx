import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

@Component({
  selector: 'lab-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {
  
  readonly POINTS = [
    {
      name: '2018',
      active: true
    },
    {
      name: '2019',
      active: true
    },
    {
      name: '2020',
      active: false
    },
    {
      name: '2021',
      active: false
    },
    {
      name: '2022',
      active: false
    },
    {
      name: '2023',
      active: false
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
