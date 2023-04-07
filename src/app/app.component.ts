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

  fetchMachineData() {
    this.machinesService.getMachineList().subscribe(result => {
      this.machineList = result;
    });
  }

  // usando map() invece che creare un nuovo fetching di dati, velocizza l'update dell'UI in stile "optimistic UI update" ma possibilmente crea problemi quando altre persone lavorano in contemporanea, quindi i valori sono fuori sync.
  // TODO - testare come fare a mandare segnali dal backend quando altri utenti modificano valori sul database per mantenere tutti gli utenti in sync
  // LATER - provare ad usare notifiche via webSocket, per promuovere un nuovo fetching di dati quando ci sono operazioni sul backend invece che fare fiducia sull'update di dati in locale
  handleDataRefresh(id: number) {

    // per l'ennesima volta
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
