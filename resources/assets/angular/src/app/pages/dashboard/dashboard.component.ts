import { Component, OnInit } from '@angular/core';

import * as logoImg from '../../../assets/web-devs-logo.svg';
import { AttendeeService } from '../../providers/attendee/attendee.service';
import { Attendee } from './../../models/attendee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  public logo = logoImg;

  public attendees: Attendee[];

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
      .subscribe((attendee: Attendee) => {
        this.attendees = [
          {
            id: attendee.id,
            name: attendee.name,
            image: attendee.image,
            email: attendee.email
          },
          ...this.attendees,
        ];
      });
  }

}
