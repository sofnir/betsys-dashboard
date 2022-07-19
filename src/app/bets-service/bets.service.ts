import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { Bet } from '../models/Bet';
import { BetsGenerateResponse } from './BetsGenerateResponse';

@Injectable({
  providedIn: 'root',
})
export class BetsService {
  private url = 'http://localhost:3000';

  constructor(private socket: Socket, private http: HttpClient) {}

  getBets(): Observable<Bet[]> {
    return this.http.get<Bet[]>(`${this.url}/bets`);
  }

  getBet(id: number): Observable<Bet> {
    return this.http.get<Bet>(`${this.url}/bets/${id}`);
  }

  betsGenerate(size?: number): Observable<BetsGenerateResponse> {
    return this.http.get<BetsGenerateResponse>(
      `${this.url}/bets-generate?size=${size}`
    );
  }

  startPulling(rate: number): Observable<Response> {
    return this.http.get<Response>(`${this.url}/pulling/start?rate=${rate}`);
  }

  stopPulling(): Observable<Response> {
    return this.http.get<Response>(`${this.url}/pulling/stop`);
  }

  getBetUpdated(): Observable<Bet[]> {
    return this.socket.fromEvent('bet-updated');
  }
}
