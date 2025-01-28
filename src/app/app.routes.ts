import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'dashboard',
        loadChildren: () => import('./../dashboard/dashboard-routing.module').then(r=> r.DashboardRoutingModule) // Lazy load the module
    },
    {
        path:'',redirectTo:'dashboard',pathMatch:'full'
    }
];
