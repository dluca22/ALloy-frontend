import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Machine } from '../Machine';
@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() {
  }
  getMachineList():Machine[]{

  }
}
