import { Component, OnInit } from '@angular/core';

import * as logoImg from '../../../../assets/web-devs-logo-dark.svg';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public logo = logoImg;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  public loginInfo = {
    email: '',
    password: '',
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  attemptLogin() {
    this.http.post('api/login', this.loginInfo, this.httpOptions)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/admin/raffle']);
      });
  }

}
