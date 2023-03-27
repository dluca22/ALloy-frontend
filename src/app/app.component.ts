import { Component, OnInit } from '@angular/core';
import { ListService } from './services/list.service';
import { Machine } from './interfaces/Machine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  machineList!: Machine[] | [];

  ngOnInit(): void {
    this.listService.getMachineList().subscribe(result => this.machineList = result)

  }

  constructor(private listService: ListService){

  }


}
