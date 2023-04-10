import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewRef } from '@angular/core';
import { MessageBroadcastService } from 'src/app/message-broadcast.service';


interface PopupMessage {
  text: string,
  color: string
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

messages:PopupMessage[] = [];
// message?:PopupMessage;

// TODO controllare come gestire behaviourSubject's inital value, perche per ora ricevo un empty object come initial value e viene mostrato a schermo
// ngOnChanges non funziona in quanto controlla il riferimento all'oggetto in memoria, non al contenuto dell'oggetto.



ngOnInit(){
  // this.messageBroadcast.message.subscribe(content => this.message = content)
  this.messageBroadcast.message.subscribe(content => this.messages.push(content))

}

constructor(private messageBroadcast: MessageBroadcastService){}

}
