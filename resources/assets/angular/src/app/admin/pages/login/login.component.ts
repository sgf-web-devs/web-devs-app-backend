import { Component, OnInit } from '@angular/core';

import * as logoImg from '../../../../assets/web-devs-logo-dark.svg';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public logo = logoImg;

  constructor() { }

  ngOnInit() {
  }

}
