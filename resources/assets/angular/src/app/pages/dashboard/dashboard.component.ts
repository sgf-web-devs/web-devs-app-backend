import { Component, OnInit } from '@angular/core';

import * as logoImg from '../../../assets/web-devs-logo.svg';
import { AttendeeService } from '../../providers/attendee/attendee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  public logo = logoImg;

  public attendees;

  constructor(
    private attendeeProvider: AttendeeService
  ) { }

  ngOnInit() {
    this.attendeeProvider.getAttendees().subscribe(attendees => {
      this.attendees = attendees;
      this.attendeesListener();
    });
  }

  private attendeesListener() {
    this.attendeeProvider.liveAttendees()
      .subscribe(data => {
        console.log(data);
      });
  }

}
