import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { LoggerService } from './services/logger.service';
import { EvenBetterLoggerService } from './services/even-better-logger.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [{ provide: LoggerService, useClass: EvenBetterLoggerService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
