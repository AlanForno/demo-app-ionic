import { Routes } from "@angular/router";
import { TabsComponent } from "./tabs.component";

export const routes: Routes = [
    {
        path: '',
        component: TabsComponent,
        children: [
            {
                path: 'tab1',
                loadComponent: () => import('../pages/tab1/tab1.page').then(m => m.Tab1Page)
            },
            {
                path: 'tab2',
                loadComponent: () => import('../pages/tab2/tab2.page').then(m => m.Tab2Page)
            },
            {
                path: 'tab3',
                loadComponent: () => import('../pages/tab3/tab3.page').then(m => m.Tab3Page)
            },
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            }
        ]
    }
]