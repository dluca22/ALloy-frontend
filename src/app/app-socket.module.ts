import { NgModule } from '@angular/core';
// module for sockets
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';


const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };


@NgModule({
  imports: [SocketIoModule.forRoot(config)],
  exports: [SocketIoModule]
})

//  custom rename like app routing external module
export class MySocketIoModule { }
