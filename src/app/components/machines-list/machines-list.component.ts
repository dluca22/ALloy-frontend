import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { Machine } from 'src/app/Machine';

@Component({
  selector: 'app-machines-list',
  templateUrl: './machines-list.component.html',
  styleUrls: ['./machines-list.component.scss']
})
export class MachinesListComponent implements OnInit {
  machines: Machine[] = [];

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    // on initializing calls this listService method imported from list.service
    this.listService.getMachineList()
  }
}
