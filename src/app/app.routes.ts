import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    title: 'Home',
    loadComponent: () => import('./pages/home/home.component').then(mod => mod.HomeComponent)
  },
  {
    path: 'stack-traces',
    title: 'Stack Traces',
    loadComponent: () => import('./pages/stack-traces/stack-traces.component').then(mod => mod.StackTracesComponent)
  },
];
