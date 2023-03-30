import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, map } from 'rxjs';


interface temperatureData {
  name:string,
  temperature:number
}

@Injectable({
  providedIn: 'root'
})
export class SocketUpdatesService {


  constructor(private socket: Socket) {}

  // getData() {
  //   return this.socket.fromEvent('data').pipe(map((data:any) => data.randomNum));
  // }

  getTemperature(name: string): Observable<temperatureData> {
    // console.log(name)
    console.log("chiamato")
    return this.socket.fromEvent('temperatureUpdate').pipe(
      map((data:any) => data.find(
        (m:any) => m.name === name)));
  }


}
