import { Component, OnInit } from '@angular/core';
import { Machine } from 'src/app/Machine';
import { ListService } from 'src/app/services/list.service';

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
    this.listService.getMachineList()
  }

}
