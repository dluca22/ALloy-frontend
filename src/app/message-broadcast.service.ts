import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageBroadcastService {

  private messageSource = new BehaviorSubject<string>("")
  message = this.messageSource.asObservable()

  castMessage(text: string){
    this.messageSource.next(text)
  }

  constructor() { }
}
