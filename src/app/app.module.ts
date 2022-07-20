import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { HttpClientModule } from '@angular/common/http';
import { BetsDashboardComponent } from './bets-dashboard/bets-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PullingButtonsComponent } from './pulling-buttons/pulling-buttons.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialsModule } from './materials/materials.module';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    BetsDashboardComponent,
    PullingButtonsComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
