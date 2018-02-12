import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendee',
  templateUrl: './attendee.component.html',
  styleUrls: ['./attendee.component.sass']
})
export class AttendeeComponent implements OnInit {

  @Input()
  public attendee;

  constructor() { }

  ngOnInit() {
  }

}
