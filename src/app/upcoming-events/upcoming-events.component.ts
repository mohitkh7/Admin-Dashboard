import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  events = [
    {
      date: new Date(2021, 5, 22),
      title: 'Meeting with partners'
    },
    {
      date: new Date(2021,5, 26),
      title: '103th Web Conference'
    },
    {
      date: new Date(2021, 5, 30),
      title: 'Lunch with steve'
    },
    {
      date: new Date(2021, 6, 2),
      title: 'Meeting with partners'
    },
    {
      date: new Date(2021, 6, 15),
      title: 'Weekly Meeting'
    },
    {
      date: new Date(),
      title: 'Meeting with partners'
    },
  ]

}
