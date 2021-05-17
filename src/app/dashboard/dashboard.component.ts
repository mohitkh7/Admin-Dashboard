import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /* doughnut chart config */
  doughnutChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom'
    },
    cutoutPercentage: 70,
  };
  doughnutChartLabels: Label[] = [
    'Other',
    'Shoes',
    'T-Shirt',
    'Jacket'
  ];
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartLegend = true;
  doughnutChartPlugins = [];

  doughnutChartData: ChartDataSets[] = [{
    data: [13, 60, 28, 28],
    label: 'Products Sold',
    backgroundColor: ['#ff3f3b', '#0498ff', '#ff9b2d', '#5779ff'],
    borderWidth: 0,
  }];

  /* bar chart config */
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        id: 'x-axis-1',
        gridLines: {
          display: false
        },
        ticks: {
          callback: function (val, index) {
            return (index + 1) % 3 == 0 ? val : '';
          },
          maxRotation: 0
        }
      }],
      yAxes: [{
        id: 'y-axis-1',
        gridLines: {
          display: false
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 220,
          display: false
        }
      }]
    }
  };
  barChartLabels: Label[] = ['20 Jun', '21 Jun', '22 Jun', '23 Jun', '24 Jun', '25 Jun', '26 Jun', '27 Jun', '28 Jun', '29 Jun', '30 Jun'];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [{
    label: 'Page views per day',
    data: [180, 150, 120, 200, 120, 100, 150, 150, 180, 100, 200],
    backgroundColor: [
      '#c9dde9',
      '#c9dde9',
      '#0597ff',
      '#0597ff',
      '#0597ff',
      '#0597ff',
      '#0597ff',
      '#0597ff',
      '#0597ff',
      '#c9dde9',
      '#c9dde9',
    ],
    maxBarThickness: 12,
  }];

  /* line chart config */
  lineChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      align: 'end'
    },
    scales: {
      xAxes: [{
        id: 'x-axis-1',
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        id:'y-axis-1',
        ticks: {
          suggestedMin: 0,
          suggestedMax: 30,
          stepSize: 5
        }
      }]
    },
  };
  lineChartLabels: Label[] = ['22 Jun', '23 Jun', '24 Jun', '25 Jun', '26 Jun', '27 Jun', '28 Jun'];
  lineChartType: ChartType = 'line';
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartData: ChartDataSets[] = [
    {
      label: 'Income',
      data: [20, 12, 25, 18, 22, 20, 23],
      fill: true,
      borderColor: '#3c9cdf',
      backgroundColor: '#3c9cdf10',
      borderWidth: 2,
      pointRadius: 0,
    },
    {
      label: 'Expense',
      data: [15, 18, 14, 16, 9, 14, 18],
      fill: true,
      borderColor: '#717dd3',
      backgroundColor: '#717dd310',
      borderWidth: 2,
      pointRadius: 0,
    }
  ];

}
