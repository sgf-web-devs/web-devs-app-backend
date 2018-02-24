import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PrizesService {

  constructor(private http: HttpClient) { }

  allPrizes() {
    return this.http.get('api/prizes');
  }

  enabledPrizes() {
    return this.http.get('api/prizes/enabled');
  }

}
