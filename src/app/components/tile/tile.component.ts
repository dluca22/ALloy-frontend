import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MachineDetail } from 'src/app/interfaces/MachineDetail';
import { ListService } from 'src/app/services/list.service';

// this should be the tile in the main part of the app, where the complete data of EACH machine or sector would be displayed in a tile configuration
// OR just having tiles for general stats of the facility and have specifics for each of them in separate routes


@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  machineDetail!: any
  @Input() id!:number;
  constructor(private listService: ListService){}

  ngOnInit(): void{
    // this.machineDetail = this.listService.getMachineDetail(this.id)
    this.listService.getMachineDetail(8).subscribe( (data: any) => {
      console.log("qua i dati", data);
      this.machineDetail = data;
    })
    console.log("sono qui", this.machineDetail)
  }

}
