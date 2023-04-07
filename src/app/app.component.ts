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
  handleDataRefresh(id:number){

   // ------ queste due partono davvero ma non vengono elaboate correttamente -----
   // this.machinesService.getMachineList().subscribe(result => this.machineList = result) // not working
   // this.fetchMachineData();
   // ------------ ======================   ------------------


   // -----------  altra prova -----------------------------
   // Prova a modificare la lista di machines in base all'id del EventEmitter, in modo da fare loop over l'array ed invertire il valore di .online in base all'id della macchina (solo quando fetch request è 200), ma non funziona...
   // probabilmente il valore viene modificato in app.component ma non viene comunicato al component sidebar

   // non capisco però perche se invece uso il comando sotto in cui do io un valore arbitrario inventato, li modifica per davvero sia in app component, che nei children
   // this.machineList.map(machine => {
     //   (machine.id === id) ?
     //     {...machine,
     //     online : !machine.online
     //   }
     //   : machine
     // })
     // ------------ ======================   ------------------


    // --------------- prova con valori arbitrari e sembra funzionare, ma non capisco perche --------------------- 
     // this.machineList = [{id: 1, name: 'FAKE', sector: 1, online: 1}, {id: 1, name: 'FAKE2', sector: 1, online: 1}]
     // ------------ ======================   ------------------

  }

  ngOnInit(): void {
    this.fetchMachineData()
  }

  constructor(private machinesService: MachinesService, private socket: Socket, private socketUpdateService: SocketUpdatesService) { }


}
