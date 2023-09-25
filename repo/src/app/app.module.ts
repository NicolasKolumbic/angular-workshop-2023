import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { PlayerListComponent } from './pages/player-list/player-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
