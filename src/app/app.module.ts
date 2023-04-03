import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TileComponent } from './components/tile/tile.component';
import { MachinesListComponent } from './components/machines-list/machines-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

// moved socket module declaration from docks to separate .ts file imported down here
// import { MySocketIoModule } from './app-socket.module';
// module for sockets
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { PopupComponent } from './components/popup/popup.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TileComponent,
    MachinesListComponent,
    SidebarComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
