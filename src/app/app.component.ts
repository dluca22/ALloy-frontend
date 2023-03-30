import { Component, OnInit } from '@angular/core';
import { ListService } from './services/list.service';
import { Machine } from './interfaces/Machine';

// socket import in component
import { Socket } from 'ngx-socket-io';
import { SocketUpdatesService } from './services/socket-updates.service';

// from https://deepinder.me/creating-a-real-time-app-with-angular-8-and-socket-io-with-nodejs

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  machineList!: Machine[] | [];
  socketData?: string;
  altro?: number | string


  ngOnInit(): void {
    this.listService.getMachineList().subscribe(result => this.machineList = result)


    // this.socket.on('data', (data:any) => {this.socketData = data.randomNum as string});
    // this.socketUpdateService.getData().subscribe(data => {
    //   console.log('Data received:', data);
    //   this.socketData = data
    // });
  }

  constructor(private listService: ListService, private socket: Socket, private socketUpdateService: SocketUpdatesService) { }


}
