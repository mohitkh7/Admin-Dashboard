import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-count',
  templateUrl: './orders-count.component.html',
  styleUrls: ['./orders-count.component.css']
})
export class OrdersCountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  orders = 1860;
  target = 3000;
  orderPerc = Math.floor((this.orders / this.target) * 100);

}
