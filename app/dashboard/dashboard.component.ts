import { ActivatedRoute }               from '@angular/router';
import { Component, OnInit }            from '@angular/core';
import { Router }                       from '@angular/router';

import { TOTAL_REVENUE_CHART_OPTIONS, 
         YEARLY_PROFIT_CHART_OPTIONS, 
         YEARLY_REVENUE_CHART_OPTIONS } from './chart-options';


@Component ({
    selector:     'et-dashboard'
    ,templateUrl: 'app/dashboard/dashboard.component.html'
    ,styleUrls:   [ 'app/dashboard/dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
    dallasOptions: {};
    seattleOptions: {};
    bostonOptions: {};
    profitChartOptions: {}; 
    revenueChartOptions: {};

    constructor (private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        /* Initialize this.* bindable members with data.* members */
        let data = this.route.snapshot.data['dashboard'];

        this.setupCharts(data);
    }

    private setupCharts(data) {  
        // Configure options for the pie chart, and bind data to the pie chart
        this.dallasOptions = this.setupPieChart(TOTAL_REVENUE_CHART_OPTIONS.dallas, data.dallas.totalRevenue);
        this.seattleOptions = this.setupPieChart(TOTAL_REVENUE_CHART_OPTIONS.seattle, data.seattle.totalRevenue);
        this.bostonOptions = this.setupPieChart(TOTAL_REVENUE_CHART_OPTIONS.boston, data.boston.totalRevenue);

        // Configure options for the line chart, and bind data to the line chart
        this.profitChartOptions = this.setupOtherChart(YEARLY_PROFIT_CHART_OPTIONS, data);

        // Configure options for the bar chart, and bind data to the bar chart
        this.revenueChartOptions = this.setupOtherChart(YEARLY_REVENUE_CHART_OPTIONS, data);
    }

    private setupPieChart(officeChartOptions: any, officeData: any): any {
        let options = officeChartOptions;
        options.id = officeData.id;
        options.title.text = officeData.name + '<br>' + officeData.percent + '%';
        options.series[0].data[0] = [officeData.name, officeData.revenue];
        options.series[0].data[1] = ["Others", officeData.others];
        return options;
    }

    private setupOtherChart(chartOptions: any, data: any): any {
        let options = chartOptions;
        if ( chartOptions === YEARLY_PROFIT_CHART_OPTIONS ) {
            options.series[0].data = data.dallas.yearlyProfit;
            options.series[1].data = data.seattle.yearlyProfit;
            options.series[2].data = data.boston.yearlyProfit;
        }
        else {
            options.series[0].data = data.dallas.yearlyRevenue;
            options.series[1].data = data.seattle.yearlyRevenue;
            options.series[2].data = data.boston.yearlyRevenue;
        }
        return options; 
    }

    gotoSettings(id: number): void {
        // Navigate to the settings view for the selected office
        this.router.navigate(['/settings', id]);
    }

 }