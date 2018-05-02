import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import * as Pusher from 'pusher-js';


@Injectable()
export class AttendeeService {

  private photoUrl = 'https://parents.lionheartfitnesskids.com/media/profile-images/default.png';

  private attendeesDummyData = [
    {
      id: 1,
      name: 'Rosemaria Lilliman',
      bio: 'PHP Dev',
      photo: this.photoUrl
    },
    {
      id: 2,
      name: 'Vail Tyas',
      bio: '.NET Dev',
      photo: this.photoUrl
    },
    {
      id: 3,
      name: 'Abran Buckenham',
      bio: 'Python Dev',
      photo: this.photoUrl
    },
    {
      id: 4,
      name: 'Abeu Bernaldo',
      bio: '.NET Dev',
      photo: this.photoUrl
    },
    {
      id: 5,
      name: 'Lorene Quig',
      bio: 'PHP Dev',
      photo: this.photoUrl
    },
    {
      id: 6,
      name: 'Malachi Vannini',
      bio: 'Backend Dev',
      photo: this.photoUrl
    },
    {
      id: 7,
      name: 'Merwin Barfoot',
      bio: 'PHP Dev',
      photo: this.photoUrl
    },
    {
      id: 8,
      name: 'Gaylor Prigg',
      bio: 'PHP Dev',
      photo: this.photoUrl
    },
    {
      id: 9,
      name: 'Keely Hobell',
      bio: 'JS Dev',
      photo: this.photoUrl
    },
    {
      id: 10,
      name: 'Neila Birden',
      bio: 'Backend Dev',
      photo: this.photoUrl
    },
    {
      id: 11,
      name: 'Kriste Kernocke',
      bio: 'Frontend Dev',
      photo: this.photoUrl
    },
    {
      id: 12,
      name: 'Ermin Celli',
      bio: 'Python Dev',
      photo: this.photoUrl
    },
    {
      id: 13,
      name: 'Annnora Steane',
      bio: 'Frontend Dev',
      photo: this.photoUrl
    },
    {
      id: 14,
      name: 'Ileana Perrington',
      bio: 'Full Stack Dev',
      photo: this.photoUrl
    },
    {
      id: 15,
      name: 'Heinrik Barniss',
      bio: 'PHP Dev',
      photo: this.photoUrl
    },
    {
      id: 16,
      name: 'Elfrieda Babber',
      bio: 'Python Dev',
      photo: this.photoUrl
    },
    {
      id: 17,
      name: 'Kirstyn Burgum',
      bio: 'Frontend Dev',
      photo: this.photoUrl
    },
    {
      id: 18,
      name: 'Dania Hugnet',
      bio: 'Python Dev',
      photo: this.photoUrl
    },
    {
      id: 19,
      name: 'Tatiania Worlidge',
      bio: 'Full Stack Dev',
      photo: this.photoUrl
    },
    {
      id: 20,
      name: 'Dee dee McGlade',
      bio: 'PHP Dev',
      photo: this.photoUrl
    },
    {
      id: 21,
      name: 'Isak Eick',
      bio: 'Backend Dev',
      photo: this.photoUrl
    },
    {
      id: 22,
      name: 'Hazlett Leipold',
      bio: 'Backend Dev',
      photo: this.photoUrl
    },
    {
      id: 23,
      name: 'Shandee Kingswell',
      bio: '.NET Dev',
      photo: this.photoUrl
    },
    {
      id: 24,
      name: 'Giacobo Kimble',
      bio: 'JS Dev',
      photo: this.photoUrl
    },
    {
      id: 25,
      name: 'Adria Whetnell',
      bio: 'PHP Dev',
      photo: this.photoUrl
    },
    {
      id: 26,
      name: 'Patrizia Eam',
      bio: 'Full Stack Dev',
      photo: this.photoUrl
    },
    {
      id: 27,
      name: 'Rab Barthelet',
      bio: 'Full Stack Dev',
      photo: this.photoUrl
    },
    {
      id: 28,
      name: 'Quinta Reffe',
      bio: 'JS Dev',
      photo: this.photoUrl
    },
    {
      id: 29,
      name: 'Daron Graeser',
      bio: 'Backend Dev',
      photo: this.photoUrl
    },
    {
      id: 30,
      name: 'Marve Thow',
      bio: 'Backend Dev',
      photo: this.photoUrl
    },
    {
      id: 31,
      name: 'Lamar Candlish',
      bio: 'Backend Dev',
      photo: this.photoUrl
    },
    {
      id: 32,
      name: 'Ivett Moultrie',
      bio: 'Full Stack Dev',
      photo: this.photoUrl
    },
    {
      id: 33,
      name: 'Olive Ceyssen',
      bio: '.NET Dev',
      photo: this.photoUrl
    },
    {
      id: 34,
      name: 'Leroy Jukubczak',
      bio: 'PHP Dev',
      photo: this.photoUrl
    },
    {
      id: 35,
      name: 'Ogdon Stut',
      bio: 'PHP Dev',
      photo: this.photoUrl
    },
    {
      id: 36,
      name: 'Warden Janes',
      bio: 'JS Dev',
      photo: this.photoUrl
    },
    {
      id: 37,
      name: 'Ricki Carbery',
      bio: 'PHP Dev',
      photo: this.photoUrl
    },
    {
      id: 38,
      name: 'Dal Crolla',
      bio: '.NET Dev',
      photo: this.photoUrl
    },
    {
      id: 39,
      name: 'Dominic Hopewell',
      bio: 'Frontend Dev',
      photo: this.photoUrl
    },
    {
      id: 40,
      name: 'Brander Oldacre',
      bio: 'Frontend Dev',
      photo: this.photoUrl
    },
    {
      id: 41,
      name: 'Justis Cordova',
      bio: '.NET Dev',
      photo: this.photoUrl
    },
    {
      id: 42,
      name: 'Annamaria Kenealy',
      bio: 'JS Dev',
      photo: this.photoUrl
    },
    {
      id: 43,
      name: 'Anabelle Jewitt',
      bio: 'Full Stack Dev',
      photo: this.photoUrl
    },
    {
      id: 44,
      name: 'Gottfried Salasar',
      bio: 'Full Stack Dev',
      photo: this.photoUrl
    },
    {
      id: 45,
      name: 'Jervis Hick',
      bio: 'Python Dev',
      photo: this.photoUrl
    },
    {
      id: 46,
      name: 'Brooke Boother',
      bio: 'Frontend Dev',
      photo: this.photoUrl
    },
    {
      id: 47,
      name: 'Goober Andreacci',
      bio: 'Backend Dev',
      photo: this.photoUrl
    },
    {
      id: 48,
      name: 'Wrennie O\'Kuddyhy',
      bio: 'PHP Dev',
      photo: this.photoUrl
    },
    {
      id: 49,
      name: 'Connie Brigman',
      bio: 'Full Stack Dev',
      photo: this.photoUrl
    },
    {
      id: 50,
      name: 'Wanids Windows',
      bio: 'Frontend Dev',
      photo: this.photoUrl
    },
    {
      id: 51,
      name: 'Harmonie Jehaes',
      bio: 'PHP Dev',
      photo: this.photoUrl
    },
    {
      id: 52,
      name: 'Zulema Spofford',
      bio: '.NET Dev',
      photo: this.photoUrl
    },
    {
      id: 53,
      name: 'Susanne Crenshaw',
      bio: 'Full Stack Dev',
      photo: this.photoUrl
    },
    {
      id: 54,
      name: 'Rip Iverson',
      bio: '.NET Dev',
      photo: this.photoUrl
    },
    {
      id: 55,
      name: 'Mandi Alaway',
      bio: '.NET Dev',
      photo: this.photoUrl
    },
    {
      id: 56,
      name: 'Marshall Speir',
      bio: 'JS Dev',
      photo: this.photoUrl
    },
    {
      id: 57,
      name: 'Aurea Nucator',
      bio: 'JS Dev',
      photo: this.photoUrl
    },
    {
      id: 58,
      name: 'Lamont Huggens',
      bio: 'PHP Dev',
      photo: this.photoUrl
    },
    {
      id: 59,
      name: 'Keefer Gerhartz',
      bio: '.NET Dev',
      photo: this.photoUrl
    },
    {
      id: 60,
      name: 'Towny Spight',
      bio: 'Frontend Dev',
      photo: this.photoUrl
    },
    {
      id: 61,
      name: 'Keary Gobell',
      bio: 'Python Dev',
      photo: this.photoUrl
    },
    {
      id: 62,
      name: 'Rosana Entwisle',
      bio: 'PHP Dev',
      photo: this.photoUrl
    },
    {
      id: 63,
      name: 'Richardo Clemitt',
      bio: 'Frontend Dev',
      photo: this.photoUrl
    },
    {
      id: 64,
      name: 'Freida Glasheen',
      bio: 'Full Stack Dev',
      photo: this.photoUrl
    },
    {
      id: 65,
      name: 'Antonius Trymme',
      bio: 'Backend Dev',
      photo: this.photoUrl
    },
    {
      id: 66,
      name: 'Roseline Lorryman',
      bio: 'JS Dev',
      photo: this.photoUrl
    },
    {
      id: 67,
      name: 'Agustin Gredden',
      bio: 'Frontend Dev',
      photo: this.photoUrl
    },
    {
      id: 68,
      name: 'Abigale Dibb',
      bio: '.NET Dev',
      photo: this.photoUrl
    },
    {
      id: 69,
      name: 'Ugo Tabourel',
      bio: 'Frontend Dev',
      photo: this.photoUrl
    },
    {
      id: 70,
      name: 'Ernestus Ysson',
      bio: 'Full Stack Dev',
      photo: this.photoUrl
    },
    {
      id: 71,
      name: 'Vite Neiland',
      bio: 'Backend Dev',
      photo: this.photoUrl
    },
    {
      id: 72,
      name: 'Tiena Custy',
      bio: 'Frontend Dev',
      photo: this.photoUrl
    },
    {
      id: 73,
      name: 'Katalin Carrodus',
      bio: 'Backend Dev',
      photo: this.photoUrl
    },
    {
      id: 74,
      name: 'Broderick Thurlborn',
      bio: 'PHP Dev',
      photo: this.photoUrl
    },
    {
      id: 75,
      name: 'Farris Backman',
      bio: 'Full Stack Dev',
      photo: this.photoUrl
    },
    {
      id: 76,
      name: 'Lucita Heales',
      bio: 'Python Dev',
      photo: this.photoUrl
    },
    {
      id: 77,
      name: 'Ashlee Funnell',
      bio: 'JS Dev',
      photo: this.photoUrl
    },
    {
      id: 78,
      name: 'Olly Saxon',
      bio: 'Frontend Dev',
      photo: this.photoUrl
    },
    {
      id: 79,
      name: 'Waverly MacElroy',
      bio: 'Python Dev',
      photo: this.photoUrl
    },
    {
      id: 80,
      name: 'Saidee Gisbye',
      bio: '.NET Dev',
      photo: this.photoUrl
    },
    {
      id: 81,
      name: 'Pris Ginsie',
      bio: 'Python Dev',
      photo: this.photoUrl
    },
    {
      id: 82,
      name: 'Rayner Domenget',
      bio: 'PHP Dev',
      photo: this.photoUrl
    },
    {
      id: 83,
      name: 'Robinet Lucus',
      bio: 'Full Stack Dev',
      photo: this.photoUrl
    },
    {
      id: 84,
      name: 'Adair Corkhill',
      bio: 'Frontend Dev',
      photo: this.photoUrl
    },
    {
      id: 85,
      name: 'Carlota Rubinivitz',
      bio: 'JS Dev',
      photo: this.photoUrl
    },
    {
      id: 86,
      name: 'Khalil Whale',
      bio: 'Full Stack Dev',
      photo: this.photoUrl
    },
    {
      id: 87,
      name: 'Nolana Glaisner',
      bio: '.NET Dev',
      photo: this.photoUrl
    },
    {
      id: 88,
      name: 'Jake Dunnion',
      bio: 'Backend Dev',
      photo: this.photoUrl
    },
    {
      id: 89,
      name: 'Saw Masser',
      bio: 'PHP Dev',
      photo: this.photoUrl
    },
    {
      id: 90,
      name: 'Parker Mordaunt',
      bio: '.NET Dev',
      photo: this.photoUrl
    },
    {
      id: 91,
      name: 'Barclay Lude',
      bio: 'PHP Dev',
      photo: this.photoUrl
    },
    {
      id: 92,
      name: 'Ardath Haseldine',
      bio: 'Python Dev',
      photo: this.photoUrl
    },
    {
      id: 93,
      name: 'Herold Putton',
      bio: 'Full Stack Dev',
      photo: this.photoUrl
    },
    {
      id: 94,
      name: 'Ediva Manilove',
      bio: 'Backend Dev',
      photo: this.photoUrl
    },
    {
      id: 95,
      name: 'Charis Glaysher',
      bio: '.NET Dev',
      photo: this.photoUrl
    },
    {
      id: 96,
      name: 'Wendel Sanper',
      bio: 'Frontend Dev',
      photo: this.photoUrl
    },
    {
      id: 97,
      name: 'Olympe Beckinsale',
      bio: 'JS Dev',
      photo: this.photoUrl
    },
    {
      id: 98,
      name: 'Adelaide Balasini',
      bio: 'Frontend Dev',
      photo: this.photoUrl
    },
    {
      id: 99,
      name: 'Wald Finder',
      bio: 'PHP Dev',
      photo: this.photoUrl
    },
    {
      id: 100,
      name: 'Rois Taffarello',
      bio: 'Frontend Dev',
      photo: this.photoUrl
    }
  ];

  constructor() {  }

  public getAttendees() {
    return of(this.attendeesDummyData);
  }

  public liveAttendees(): Observable<any> {
    const pusher = new Pusher('d8f99c2183db4fb5c15a', {
      cluster: 'us2',
      encrypted: true
    });

    const channel = pusher.subscribe('my-channel');

    return Observable.create(observer => {
      channel.bind('my-event', data => observer.next(data));
    });
  }
}
