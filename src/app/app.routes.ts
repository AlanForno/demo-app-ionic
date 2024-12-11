import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tab1',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tab2',
    loadComponent: () => import('./pages/tab2/tab2.page').then( m => m.Tab2Page)
  },
  {
    path: 'tab3',
    loadComponent: () => import('./pages/tab3/tab3.page').then( m => m.Tab3Page)
  },
  {
    path: '',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },  {
    path: 'suscripcion',
    loadComponent: () => import('./pages/suscripcion/suscripcion.page').then( m => m.SuscripcionPage)
  },
  {
    path: 'rescate',
    loadComponent: () => import('./pages/rescate/rescate.page').then( m => m.RescatePage)
  },


];
