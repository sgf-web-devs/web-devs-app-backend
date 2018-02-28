import { Component, OnInit } from '@angular/core';

import * as logoImg from '../../../../assets/web-devs-logo-dark.svg';
import { Router } from '@angular/router';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public logo = logoImg;

  public loginInfo = {
    email: '',
    password: '',
  };

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  attemptLogin() {
    this.auth.login(
      this.loginInfo.email,
      this.loginInfo.password,
      '/admin/prizes'
    );
  }

}
