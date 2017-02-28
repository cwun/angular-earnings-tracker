export const COLORS = {
    dallas: '#8d4654',
    seattle: '#7798BF',
    boston: '#496949',
    others: '#f5f5f5'
}

export const TOTAL_REVENUE_CHART_OPTIONS = {
    dallas: {
        id: 0,
        colors: ['#8d4654', '#f5f5f5'],
        chart: { 
            type: 'pie'
        },
        title: {
            text: 'Dallas<br>',
            align: 'center',
            verticalAlign: 'middle',
            y: 0,
            style: {
                fontWeight: 'bold',
                fontSize: '30px',
                color: '#8d4654'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: false
            }
        },
        tooltip: { 
            shared: true, 
            valuePrefix: '$' 
        },
        series: [{
            innerSize: '80%',
            name: 'Revenue',
            data: [
                ['Dallas', 0],
                ['Others', 0]
            ]
        }]
    },
    seattle: {
        id: 0,
        colors: ['#7798BF', '#f5f5f5'],
        chart: { 
            type: 'pie'
        },
        title: {
            text: 'Seattle<br>',
            align: 'center',
            verticalAlign: 'middle',
            y: 0,
            style: {
                fontWeight: 'bold',
                fontSize: '30px',
                color: '#7798BF'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: false
            }
        },
        tooltip: { 
            shared: true, 
            valuePrefix: '$' 
        },
        series: [{
            innerSize: '80%',
            name: 'Revenue',
            data: [
                ['Seattle', 0],
                ['Others', 0]
            ]
        }]
    },
    boston: {
        id: 0,
        colors: ['#496949', '#f5f5f5'],
        chart: { 
            type: 'pie'
        },
        title: {
            text: 'Seattle<br>',
            align: 'center',
            verticalAlign: 'middle',
            y: 0,
            style: {
                fontWeight: 'bold',
                fontSize: '30px',
                color: '#496949'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: false
            }
        },
        tooltip: { 
            shared: true, 
            valuePrefix: '$' 
        },
        series: [{
            innerSize: '80%',
            name: 'Revenue',
            data: [
                ['Boston', 0],
                ['Others', 0]
            ]
        }]
    }
}

export const YEARLY_PROFIT_CHART_OPTIONS = {
    colors: ['#8d4654', '#7798BF', '#496949'],
    title: { 
        text: ''
    },
    xAxis: {
        categories: [ '2013', '2014', '2015', '2016', '2017' ]
    },
    yAxis: {
        title: {
            text: 'Profit'
        }
    },
    tooltip: { 
        shared: true, 
        valuePrefix: '$' 
    },
    credits: { 
        enabled: true 
    },
    series: [
      {
        "name": "Dallas",
        "data": [4, 5, 3, 4, 3]
      },{
        "name": "Seattle",
        "data": [3, 4, 5, 6, 7]
      },{
        "name": "Boston",
        "data": [5, 6, 7, 8, 9]
      }
  ],
 
}

export const YEARLY_REVENUE_CHART_OPTIONS = {
    colors: ['#8d4654', '#7798BF', '#496949'],
    chart: {
        type: 'column'
    },
    title: { 
        text: '' 
    },
    xAxis: {
        categories: ['2013', '2014', '2015', '2016', '2017']
    },
    yAxis: {
         title: {
            text: 'Revenue'
        }
    },
    tooltip: {
        shared: true,
        valuePrefix: '$'
    },
    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },
    series: [
      {
        "name": "Dallas",
        "data": [2, 2, 2, 2, 2]
      }, {
        "name": "Seattle",
        "data": [4, 4, 4, 4, 4]
      }, {
        "name": "Boston",
        "data": [10, 10, 10, 10, 10]
      }
    ]
}