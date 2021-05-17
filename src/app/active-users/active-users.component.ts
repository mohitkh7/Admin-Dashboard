import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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


}
