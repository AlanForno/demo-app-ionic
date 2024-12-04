import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tab2',
    loadComponent: () => import('./tab2/tab2.page').then( m => m.Tab2Page)
  },
];
