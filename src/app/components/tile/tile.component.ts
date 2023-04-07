import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Machine } from 'src/app/interfaces/Machine';
import { MachineDetail } from 'src/app/interfaces/MachineDetail';
import { MachinesService } from 'src/app/services/machines.service';
import { SocketUpdatesService } from 'src/app/services/socket-updates.service';

// this should be the tile in the main part of the app, where the complete data of EACH machine or sector would be displayed in a tile configuration
// OR just having tiles for general stats of the facility and have specifics for each of them in separate routes


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
  liveDataSubscription: Subscription | undefined

  //  machine list gets called once then creates a loop of component passing id which will be used to get machineDetail from service
  @Input() id!: number;   // receive id from parent component (app.component).
  @Output() popup = new EventEmitter<string>();
  @Output() refreshData = new EventEmitter()


  toggleOnline(machineId: number, status: boolean) {
    this.machinesService.toggleMachineStatus(machineId, status).subscribe(
      result => {
        if (result.code === 200) {
          console.log("test", result)
          this.popup.emit(result.message) // TODO trigger popup with message of result
          this.loadData() // call loadData again to update the tile
          this.socketUpdateService.changeSocketMachineStatus() // send to backend for refreshing database of machines that emit data

          // unsubscribe from this data stream if trying to shut down machine ???????
          if(status === false){
            this.liveDataSubscription?.unsubscribe
          }

          this.refreshData.emit(machineId)
          // this.refreshData.emit(this.machineDetail)
        }
      },
      error => {
        this.popup.emit(error) // trigger popup with message of result
        console.log("error response from toggleOnline")
      })
  }

  // calls service to listen to subscribe to live data emission, the observable updates the values real time
  getLiveStatistics(machineName: string): void {
    if (this.machineDetail && this.machineDetail.online) {
      this.liveDataSubscription = this.socketUpdateService.getLiveData(machineName).subscribe(result => {
        this.machineTemperature = result.temperature;
        this.machinePressure = result.pressure;
        this.machineFlowRate = result.flow_rate;
      })
    }
  }

  // reusable function that fetches new data from backend either at onInit or after toggleOnline
  loadData(): void {
    this.machinesService.getMachineDetail(this.id).subscribe(machine => {
      this.machineDetail = machine
      // console.log(this.machineDetail)
      this.getLiveStatistics(this.machineDetail.name)
    })
  }

  ngOnInit(): void {
    // on component  init, start the loadData function
    this.loadData()
  }
  constructor(private machinesService: MachinesService, private socketUpdateService: SocketUpdatesService) { }
}
