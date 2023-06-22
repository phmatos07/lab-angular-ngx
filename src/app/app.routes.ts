import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    title: 'Home',
    loadComponent: () => import('./pages/home/home.component').then(mod => mod.HomeComponent)
  },
  {
    path: 'teste',
    title: 'Teste',
    loadComponent: () => import('./pages/teste/teste.component').then(mod => mod.TesteComponent)
  },
];
