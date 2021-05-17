import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-popular-categories',
  templateUrl: './popular-categories.component.html',
  styleUrls: ['./popular-categories.component.css']
})
export class PopularCategoriesComponent implements OnInit {

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

}
