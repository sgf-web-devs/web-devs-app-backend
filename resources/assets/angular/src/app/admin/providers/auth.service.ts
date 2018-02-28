import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private loggedIn = false;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  checkAuth() {
    return this.loggedIn;
  }

  login(email: string, password: string, successRoute: string) {
    return this.http.post('api/login', {email, password}, this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        this.loggedIn = true;
        this.router.navigate([successRoute]);
      });
  }

  logout(successRoute: string) {
    this.http.get('api/logout').subscribe(response => {
      this.loggedIn = false;
      this.router.navigate([successRoute]);
    });
  }

}
