import { Component, OnInit, Input } from '@angular/core';
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
export class SidebarComponent {
  // machineList!: Machine[] | [];

  @Input() machineList!:Machine[]

  constructor(private machinesService: MachinesService) {}

  // ngOnInit(): void {
  //   // on initializing calls this machinesService method imported from machines.service
  // this.machinesService.getMachineList().subscribe(result => this.machineList = result)
  // }

}
