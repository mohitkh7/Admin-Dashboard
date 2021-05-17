import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.css']
})
export class RecentOrdersComponent implements OnInit {

  orders: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getRecentOrders();
  }

  getRecentOrders(): void {
    this.orders = [
      {date: new Date(), customer: 'Paula Allen', status: 'completed', total: 104.98},
      {date: new Date(), customer: 'Kevin Adkins', status: 'completed', total: 233.00},
      {date: new Date(), customer: 'Joyes Murray', status: 'completed', total: 170.25},
      {date: new Date(), customer: 'Albert Ortiz', status: 'completed', total: 180.25},
    ];
  }

}
