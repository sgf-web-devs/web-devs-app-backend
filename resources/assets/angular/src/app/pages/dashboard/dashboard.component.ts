import { Component, OnInit } from '@angular/core';

import * as logoImg from '../../../assets/web-devs-logo.svg';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {
  public logo = logoImg;
  constructor() { }

  ngOnInit() {
  }

}
