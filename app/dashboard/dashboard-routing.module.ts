import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { DashboardResolver }    from './dashboard-resolver.service';

const routes: Routes = [
    {   path: 'dashboard',  
        component: DashboardComponent,
        resolve: {
            dashboard: DashboardResolver
        }
    }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class DashboardRoutingModule {}