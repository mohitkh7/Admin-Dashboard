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
      {date: new Date(2021, 5, 19, 16, 23), customer: 'Paula Allen', status: 'Completed', total: 104.98},
      {date: new Date(2021, 5, 19, 15, 47), customer: 'Kevin Adkins', status: 'Completed', total: 233.00},
      {date: new Date(2021, 5, 19, 15, 3), customer: 'Joyes Murray', status: 'Pending', total: 170.25},
      {date: new Date(2021, 5, 19, 11, 55), customer: 'Albert Ortiz', status: 'Cancelled', total: 180.25},
    ];
  }
  
  getStatusClass(status: string): string {
    let cssClass = '';
    switch(status) {
      case 'Cancelled':
        cssClass = 'text-danger';
        break;
      case 'Pending':
        cssClass = 'text-warning';
        break;
      default:
        cssClass = 'text-success';
    }
    return cssClass;
  }

}
