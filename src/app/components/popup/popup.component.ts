import { Component, Input, OnInit } from '@angular/core';
import { MessageBroadcastService } from 'src/app/message-broadcast.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

message?:string;

ngOnInit(){
  this.messageBroadcast.message.subscribe(content => this.message = content)
}

constructor(private messageBroadcast: MessageBroadcastService ){}

}
