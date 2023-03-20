import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Machine } from '../interfaces/Machine';
import { Observable } from 'rxjs';
// import { MachineDetail } from '../interfaces/MachineDetail';

// interface that describe the structure of data to recieve from backend for the specific machine data

export interface MachineDetail {
  id:number,
  name:string,
  sector:number,
  online:number,
  min_temp:number,
  max_temp:number,
  min_pressure:number,
  max_pressure:number,
  flow_rate:number,
  flow_rate_unit:string
}

// this is the service that the sidebar(or machineList) use to fetch from backend API
// TODO - decide if this should be the only service fetching all the data or just the ones from this specific endpoint


@Injectable({
  providedIn: 'root'
})
export class ListService {
  private machineListUrl = 'http://localhost:3000/machines'
  private machineDetailUrl = "http://localhost:3000/machines/8"

  constructor(private http: HttpClient) {}

  getMachineList(): Observable<Machine[]> {
    return this.http.get<Machine[]>(this.machineListUrl);
  }
  getMachineDetail(id:number): any {
    return this.http.get<any>(`http://localhost:3000/machines/${id}`);
  }
}
