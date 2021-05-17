import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
