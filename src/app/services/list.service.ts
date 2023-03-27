import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Machine } from '../interfaces/Machine';
import { Observable } from 'rxjs';
import { MachineDetail } from '../interfaces/MachineDetail';

// interface that describe the structure of data to recieve from backend for the specific machine data

// this is the service that the sidebar(or machineList) use to fetch from backend API
// TODO - decide if this should be the only service fetching all the data or just the ones from this specific endpoint


@Injectable({
  providedIn: 'root'
})
export class ListService {
  private machineListUrl = 'http://localhost:3000/machines'
  

  constructor(private http: HttpClient) {}

  getMachineList(): Observable<Machine[]> {
    return this.http.get<Machine[]>(this.machineListUrl);
  }
  getMachineDetail(id:number): Observable<MachineDetail> {
    return this.http.get<MachineDetail>(this.machineListUrl +`/${id}`);
  }
}
