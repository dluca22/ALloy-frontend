import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListService } from 'src/app/services/list.service';
import { Machine } from 'src/app/interfaces/Machine';

// this is the sidebar in the main part of the page, where I think i want to add the 3 lists of sections of the page
// right now it will be fetching the data from "/machines" endpoint, getting back all the entries in the `machines` table of the database, via the `/machines` endpoint from Node

// uses ListService.ts as a service to fetch to the backend


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  implements OnInit {
  machines?: Machine[] | [];

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    // on initializing calls this listService method imported from list.service
    this.listService.getMachineList().subscribe(list => this.machines = list)
  }

}
