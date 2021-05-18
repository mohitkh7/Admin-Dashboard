import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  @Input() title: string = '';
  @Input() value: number = 0;
  @Input() change:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
