import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from './auth.service';
import { Prize } from '../models/prize';

@Injectable()
export class PrizesService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {

  }

  private httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.authService.token}`
      })
    };
  }

  allPrizes() {
    return this.http.get<Prize[]>('api/prizes', this.httpOptions());
  }

  enabledPrizes() {
    return this.http.get<Prize[]>('api/prizes/enabled', this.httpOptions());
  }

  newPrize(prize: Prize) {
    return this.http.post('api/prize', prize, this.httpOptions());
  }

  updatePrize(prize: Prize) {
    return this.http.patch(`api/prize/${prize.id}`, prize, this.httpOptions());
  }

  deletePrize(prize: Prize) {
    return this.http.delete(`api/prize/${prize.id}`, this.httpOptions());
  }

  assignPrize(prize: Prize) {
      return this.http.get(`api/prizes/assign/${prize.id}`, this.httpOptions());
  }
}
