import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Machine } from '../interfaces/Machine';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { MachineDetail } from '../interfaces/MachineDetail';

// interface that describe the structure of data to recieve from backend for the specific machine data

// this is the service that the sidebar(or machineList) use to fetch from backend API
// TODO - decide if this should be the only service fetching all the data or just the ones from this specific endpoint
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MachinesService {
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

  // presa dalla documentazione ufficiale Angular
  private handleFetchError(error: HttpErrorResponse){
    // client side or network error
    if (error.status === 0){
      console.log('errore in put', error.error)
    }else{
      // call was successful but backend responded with unsuccessful
      console.log( `Risposta con codice ${error.status}, la richiesta era: `, error.error)
    }
    // return an observable with an error that can be displayed to the user
    return throwError(() => new Error('Richiesta non eseguita; Riprovare'))
  }

  // TODO FIX THIS!!!
  toggleMachineStatus(machineId:number): Observable<any>{
    // change body of request
    return this.http.put(this.machineListUrl + `/${machineId}`, {machine: machineId}, httpOptions).pipe(retry(3), catchError(this.handleFetchError('update status', machineId)))
  }



  constructor(private http: HttpClient) { }
}
