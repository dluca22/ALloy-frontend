import { Component, OnInit } from '@angular/core';
import { ListService } from './services/list.service';
import { Machine } from './interfaces/Machine';

// socket import in component
import { Socket } from 'ngx-socket-io';

// from https://deepinder.me/creating-a-real-time-app-with-angular-8-and-socket-io-with-nodejs

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  machineList!: Machine[] | [];
  socketData?: Number | string;

  ngOnInit(): void {
    this.listService.getMachineList().subscribe(result => this.machineList = result)
    console.log("questo è oninit block")

    this.socket.on('connect', () => {
      console.log('Socket connected with id:', this.socket.ioSocket.id);
      this.socket.emit('message', 'some data');
    });


    this.socket.on('data', (data: any) => this.socketData = data.randomNum);

  }

  constructor(private listService: ListService, private socket: Socket) { }


}
