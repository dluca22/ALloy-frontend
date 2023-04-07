import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { MachinesService } from 'src/app/services/machines.service';
import { Machine } from 'src/app/interfaces/Machine';

// this is the sidebar in the main part of the page, where I think i want to add the 3 lists of sections of the page
// right now it will be fetching the data from "/machines" endpoint, getting back all the entries in the `machines` table of the database, via the `/machines` endpoint from Node

// uses MachinesService.ts as a service to fetch to the backend


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnChanges{

  countOnline?:number
  countOffline?:number

  @Input() machineList!:Machine[]


// ngOnChanges non serve in quanto i cambiamenti di machineList in handleDataRefresh vengono rispecchiati correttamente
// pero il console log viene chiamato correttamente a seguito dei cambiamenti
// tengo questa funzione in modo da poter collegare altra logica in futuro o se voglio mettere qualche altra animazione al cambiamento dell'array tipo counter
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges funziona")
    if (changes['machineList']){
      this.machineList = changes['machineList'].currentValue
    }
    // upon receiving data from parent, counts online & offline values
    this.countOffline = this.machineList.filter(machine => !machine.online).length
    this.countOnline = this.machineList.filter(machine => machine.online).length
  }



  constructor(private machinesService: MachinesService) {}
}
