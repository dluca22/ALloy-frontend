import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { Machine } from 'src/app/Machine';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  implements OnInit {
  machines: Machine[] = [];

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    console.log("init machine list")
    // on initializing calls this listService method imported from list.service
    this.listService.getMachineList().subscribe( data => {
      console.log("qua i dati", data);
      this.machines = data;
    },
    error => {
      console.log("errore", error);

    } )
  }

}
