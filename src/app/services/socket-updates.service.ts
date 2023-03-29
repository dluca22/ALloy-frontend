import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketUpdatesService {


  constructor(private socket: Socket) {}

  getData() {
    return this.socket.fromEvent('data').pipe(map((data:any) => data.randomNum));
  }
}
