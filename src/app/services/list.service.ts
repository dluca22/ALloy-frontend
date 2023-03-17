import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Machine } from '../Machine';
import { Observable } from 'rxjs';

// this is the service that the sidebar(or machineList) use to fetch from backend API
// TODO - decide if this should be the only service fetching all the data or just the ones from this specific endpoint


@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/machines'

  constructor(private http: HttpClient) {}

  getMachineList(): Observable<Machine[]> {
    console.log("qua ci arrivo", this.apiUrl)
    return this.http.get<Machine[]>(this.apiUrl);
  }
}
