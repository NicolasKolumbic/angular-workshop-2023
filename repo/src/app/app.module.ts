import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { OldLoggerService } from './services/old-logger.service';
import { NewLoggerService } from './services/new-logger.service';


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
      provide: OldLoggerService,
      useExisting: NewLoggerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
