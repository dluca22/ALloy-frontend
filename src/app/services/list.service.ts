import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Machine } from '../interfaces/Machine';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MachineDetail } from '../interfaces/MachineDetail';

// interface that describe the structure of data to recieve from backend for the specific machine data

// this is the service that the sidebar(or machineList) use to fetch from backend API
// TODO - decide if this should be the only service fetching all the data or just the ones from this specific endpoint


@Injectable({
  providedIn: 'root'
})
export class ListService {
  private machineListUrl = 'http://localhost:3000/machines'
  private machineList: Machine[] = []


  getMachineList(): Observable<Machine[]> {
    if (this.machineList.length === 0) {
      return this.http.get<Machine[]>(this.machineListUrl)
        .pipe(map(machines => {
          this.machineList = machines;
          return this.machineList
        }))
    }
    return of(this.machineList)

  }
  getMachineDetail(id: number): Observable<MachineDetail> {
    return this.http.get<MachineDetail>(this.machineListUrl + `/${id}`);
  }




  constructor(private http: HttpClient) { }
}
