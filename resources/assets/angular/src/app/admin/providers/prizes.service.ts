import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Prize } from '../models/prize';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Router } from '@angular/router';

@Injectable()
export class PrizesService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  private handle401(error: HttpErrorResponse) {
    this.router.navigate(['/admin/login']);
    return new ErrorObservable('You must be logged in to perform that action');
  }

  private catchHttpErrors(error: HttpErrorResponse) {
    if (error.status === 401) {
      return this.handle401(error);
    }
    return new ErrorObservable('An error occurred');
  }

  allPrizes() {
    return this.http.get<Prize[]>('api/prizes')
      .pipe(catchError(this.catchHttpErrors.bind(this)));
  }

  enabledPrizes() {
    return this.http.get<Prize[]>('api/prizes/enabled')
      .pipe(catchError(this.catchHttpErrors.bind(this)));
  }

  newPrize(prize: Prize) {
    return this.http.post('api/prize', prize, this.httpOptions)
      .pipe(catchError(this.catchHttpErrors.bind(this)));
  }

  updatePrize(prize: Prize) {
    return this.http.patch(`api/prize/${prize.id}`, prize, this.httpOptions)
      .pipe(catchError(this.catchHttpErrors.bind(this)));
  }

  deletePrize(prize: Prize) {
    return this.http.delete(`api/prize/${prize.id}`, this.httpOptions)
      .pipe(catchError(this.catchHttpErrors.bind(this)));
  }

  assignPrize(prize: Prize) {
      return this.http.get(`api/prizes/assign/${prize.id}`, this.httpOptions)
          .pipe(catchError(this.catchHttpErrors.bind(this)));
  }
}
