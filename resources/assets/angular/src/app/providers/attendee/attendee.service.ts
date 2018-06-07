import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as Pusher from 'pusher-js';

import { environment } from './../../../environments/environment';
import { Attendee } from './../../models/attendee';

@Injectable()
export class AttendeeService {

  constructor(
    public http: HttpClient
  ) {  }

  public getAttendees() {
    return this.http.get<Attendee[]>('api/attendees');
  }

  public liveAttendees(): Observable<any> {
    const pusher = new Pusher(environment.pusherAppKey, {
      cluster: 'us2',
      encrypted: true
    });

    const channel = pusher.subscribe('attendees');

    return Observable.create(observer => {
      channel.bind('new-checkin', (attendee: Attendee) => observer.next(attendee));
    });
  }
}
