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
  test?: boolean



  fetchMachineData() {
    this.machinesService.getMachineList().subscribe(result => this.machineList = result)

  }


  // does not work as intended with the fetch request, but works if i assign arbitrary values
  handleDataRefresh(id: number) {

    // map non modifica l'array precedente, ritorna un nuovo array
    // map non modifica l'array precedente, ritorna un nuovo array
    // map non modifica l'array precedente, ritorna un nuovo array
    // map non modifica l'array precedente, ritorna un nuovo array
    // map non modifica l'array precedente, ritorna un nuovo array
    // map non modifica l'array precedente, ritorna un nuovo array
    // map non modifica l'array precedente, ritorna un nuovo array
    // map non modifica l'array precedente, ritorna un nuovo array
    // se non lo assegni...non funziona
        this.machineList = this.machineList.map(machine => {

      if (machine.id === id) {
        return {
          ...machine,
          online: !machine.online
        }
      }
      return machine
    })
  }

  ngOnInit(): void {
    this.fetchMachineData()
  }

  constructor(private machinesService: MachinesService, private socket: Socket, private socketUpdateService: SocketUpdatesService) { }


}
