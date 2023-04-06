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

  fetchMachineData(){
    this.machinesService.getMachineList().subscribe(result => this.machineList = result)
  }

  // does not work as intended with the fetch request, but works if i assign arbitrary values
  handleDataRefresh(){
    // this.machinesService.getMachineList().subscribe(result => this.machineList = result) // not working

    this.machineList = [{id: 1, name: 'FAKE', sector: 1, online: 1}, {id: 1, name: 'FAKE2', sector: 1, online: 1}]

  }

  ngOnInit(): void {
    this.fetchMachineData()
  }

  constructor(private machinesService: MachinesService, private socket: Socket, private socketUpdateService: SocketUpdatesService) { }


}
