import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Prize } from '../models/prize';

@Injectable()
export class PrizesService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  allPrizes() {
    return this.http.get<Prize[]>('api/prizes');
  }

  enabledPrizes() {
    return this.http.get<Prize[]>('api/prizes/enabled');
  }

  newPrize(prize: Prize) {
    return this.http.post('api/prize', prize, this.httpOptions);
  }

  updatePrize(prize) {
    return this.http.patch(`api/prize/${prize.id}`, prize, this.httpOptions);
  }
}
