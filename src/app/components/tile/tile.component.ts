import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Machine } from 'src/app/interfaces/Machine';
import { MachineDetail } from 'src/app/interfaces/MachineDetail';
import { ListService } from 'src/app/services/list.service';
import { SocketUpdatesService } from 'src/app/services/socket-updates.service';

// this should be the tile in the main part of the app, where the complete data of EACH machine or sector would be displayed in a tile configuration
// OR just having tiles for general stats of the facility and have specifics for each of them in separate routes
interface TemperatureData {
  name: string,
  temperature: number
}

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  machineDetail?: MachineDetail;
  machineTemperature?: number;
  machinePressure?: number;
  machineFlowRate?: number;

  //  machine list gets called once then creates a loop of component passing id which will be used to get machineDetail from service
  @Input() id!: number;   // receive id from parent component (app.component).

  getLiveStatistics(machineName :string): void{
    if(this.machineDetail){
      this.socketUpdateService.getLiveData(machineName).subscribe(result => {
        this.machineTemperature = result.temperature;
        this.machinePressure = result.pressure;
        this.machineFlowRate = result.flow_rate;
      })
      }
  }


  ngOnInit(): void {
    // this.listService.getMachineDetail(this.id).subscribe(res => this.machineDetail = res)
    this.listService.getMachineDetail(this.id).subscribe(machine => {
      this.machineDetail = machine
      this.getLiveStatistics(this.machineDetail.name)
    })



  }
  constructor(private listService: ListService, private socketUpdateService: SocketUpdatesService) { }
}
