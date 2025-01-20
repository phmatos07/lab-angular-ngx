import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    title: 'Home',
    loadComponent: () => import('./pages/home/home.component').then(mod => mod.HomeComponent)
  },
  {
    path: 'stack-traces',
    title: 'Rastreamento de Erros',
    loadComponent: () => import('./pages/stack-traces/stack-traces.component').then(mod => mod.StackTracesComponent)
  },
  {
    path: 'control-flow',
    title: 'Controle de Fluxo',
    loadComponent: () => import('./pages/@for/@for.component').then(mod => mod.ForComponent)
  },
];
