import { Component, OnInit } from '@angular/core';
import { MachinesService } from './services/machines.service';
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
  altro?: number | string


  ngOnInit(): void {
    this.machinesService.getMachineList().subscribe(result => this.machineList = result)


  }

  constructor(private machinesService: MachinesService, private socket: Socket, private socketUpdateService: SocketUpdatesService) { }


}
