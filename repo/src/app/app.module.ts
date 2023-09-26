import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { Config } from './models/config';

import { APP_CONFIG } from './app.config';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [
    { 
      provide: Config,
      useValue: APP_CONFIG 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
