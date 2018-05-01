import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private defaultRedirectUrl = '/admin/raffle';

  public token = null;
  public redirectUrl = this.defaultRedirectUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    const token = localStorage.getItem('token');

    if (token !== null) {
      this.token = token;
    }
  }

  private httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.token !== null ? `Bearer ${this.token}` : 'None'
      })
    };
  }

  /**
   * Sets a token internally and stores it in localstorage
   */
  private setToken(token: string): void {
    this.token = token;

    if (token === null) {
      localStorage.removeItem('token');
      return;
    }

    localStorage.setItem('token', token);
  }

  isAuthed(): boolean {
    return this.token !== null;
  }

  login(email: string, password: string) {
    return this.http.post('api/auth/login', {email, password}, this.httpOptions())
      .subscribe(response => {
        this.setToken(response['access_token']);
        this.router.navigate([this.redirectUrl]);
      });
  }

  logout() {
    this.http.post('api/auth/logout', {}, this.httpOptions()).subscribe(response => {
      this.setToken(null);
      this.redirectUrl = this.defaultRedirectUrl;
      this.router.navigate(['/admin/login']);
    });
  }

}
