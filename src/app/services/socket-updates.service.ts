import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, fromEvent, map, tap } from 'rxjs';


interface temperatureData {
  name: string,
  temperature: number
}

@Injectable({
  providedIn: 'root'
})
export class SocketUpdatesService {


  constructor(private socket: Socket) { }

  // getData() {
  //   return this.socket.fromEvent('data').pipe(map((data:any) => data.randomNum));
  // }

  getLiveData(name: string): Observable<temperatureData> {
    console.log("chiamato", name)

    // return this.socket.fromEvent(name).pipe(
    //   map((data: any) => data));


    return this.socket.fromEvent(name).pipe(
      tap((data) => console.log(`Data received from socket: ${JSON.stringify(data)}`)),
      map((data: any) => data)
    );
  }


}
