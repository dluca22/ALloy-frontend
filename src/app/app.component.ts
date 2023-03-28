import { Component, OnInit } from '@angular/core';
import { ListService } from './services/list.service';
import { Machine } from './interfaces/Machine';

// socket import in component
import { Socket } from 'ngx-socket-io';

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

    this.socket.connect()
    this.socket.on('connect', () => {
      console.log('Socket connected with id:', this.socket.ioSocket.id);
      this.socket.emit('message', 'some data');
    });

    this.socket.on('data', () => console.log('dati ricevuti'));

  }

  constructor(private listService: ListService, private socket: Socket) { }


}
