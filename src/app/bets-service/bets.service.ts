import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BetsService {
  private url = 'http://localhost:3000';

  constructor(private socket: Socket, private http: HttpClient) {}

  startPulling(rate: number): Observable<Response> {
    return this.http.get<Response>(`${this.url}/pulling/start?rate=${rate}`);
  }

  stopPulling(): Observable<Response> {
    return this.http.get<Response>(`${this.url}/pulling/stop`);
  }

  getBetUpdated() {
    return this.socket.fromEvent('bet-updated');
  }
}
