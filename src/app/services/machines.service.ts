import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Machine } from '../interfaces/Machine';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { MachineDetail } from '../interfaces/MachineDetail';



// LATER - decide if this should be the only service fetching all the data or just the ones from this specific endpoint
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class MachinesService {
  private machineListUrl = 'http://localhost:3000/machines'
  private machineList: Machine[] = []


  // FIX this observable return
  getMachineList(): Observable<Machine[]> {
    console.log("parte")
    if (this.machineList.length === 0) {
      return this.http.get<Machine[]>(this.machineListUrl)
        .pipe(map(machines => {
          this.machineList = machines;
          return this.machineList
        }))}

    return of(this.machineList)
  }


  getMachineDetail(id: number): Observable<MachineDetail> {
    return this.http.get<MachineDetail>(this.machineListUrl + `/${id}`);
  }

  // presa dalla documentazione ufficiale Angular
  private handleFetchError(error: HttpErrorResponse): Observable<any> {
    // client or backend are offline, no network connection
    if (error.status === 0) {
      console.warn('Errore di connessione; error status: 0')
    } else {
      // TODO test this
      // call was successful but backend responded with unsuccessful
      console.log(`Risposta con codice ${error.status}, la richiesta era: `, error.error)
    }
    // return an observable with an error that can be displayed to the user
    return throwError(() => new Error('Richiesta non eseguita; Riprovare'))
  }


  // from tile component get machine Id and reversed status to patch to backend
  toggleMachineStatus(machineId: number, status: boolean): Observable<any> {

    return this.http.patch(this.machineListUrl + `/${machineId}`, { online: status }, httpOptions).pipe(catchError(this.handleFetchError))
  }


  constructor(private http: HttpClient) { }

}
