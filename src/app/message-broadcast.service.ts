import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface PopupMessage {
  text: string,
  color: string
}

@Injectable({
  providedIn: 'root'
})
export class MessageBroadcastService {

  private messageSource = new BehaviorSubject<PopupMessage>({text: "", color: ""})
  message = this.messageSource.asObservable()

  castMessage(popup: PopupMessage){
    this.messageSource.next(popup)
  }

  constructor() { }
}
