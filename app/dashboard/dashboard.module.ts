import { NgModule }                 from '@angular/core';
import { ChartModule }              from 'angular2-highcharts';

/* Dashboard Feature Module */
import { DashboardComponent }       from './dashboard.component';
import { DashboardService }         from './dashboard.service';
import { DashboardResolver }        from './dashboard-resolver.service';

/* Routing Module */
import { DashboardRoutingModule }   from './dashboard-routing.module';

@NgModule({
    imports:      [ DashboardRoutingModule, ChartModule.forRoot(require('highcharts')) ],
    declarations: [ DashboardComponent ], 
    providers:    [ DashboardService, DashboardResolver ]
})

export class DashboardModule {}