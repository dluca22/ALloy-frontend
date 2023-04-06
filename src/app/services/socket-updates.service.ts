import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, map } from 'rxjs';


interface MachineLiveData {
  name: string,
  temperature: number,
  pressure: number,
  flow_rate: number,
}

@Injectable({
  providedIn: 'root'
})
export class SocketUpdatesService {

  constructor(private socket: Socket) { }

  getLiveData(name: string): Observable<MachineLiveData> {
    // inferring data type into the fromEvent operator so pipe and map can know
    return this.socket.fromEvent<MachineLiveData>(name).pipe(
      map((data) => data)
    );

    // ==== THIS is without using type annotation ====
        // return this.socket.fromEvent(name).pipe(map((data:any) => data));

    //  ==== THIS .tap() used to "tap" into observable to log results while they get passed on ====
        // return this.socket.fromEvent(name).pipe(
        //   tap((data) => console.log(`Data received from socket: ${JSON.stringify(data)}`)),
        //   map((data: any) => data)
        // );
  }


  // sends message to backend to force refresh machines=== online from database for emitting data
  changeSocketMachineStatus(): void{
    this.socket.emit('patchStatus')
  }
}
