import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { LoggerService } from './services/logger.service';
import { FileLoggerService } from './services/file-logger.service';
import { ConsoleLoggerService } from './services/console-logger.service';

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
      provide: LoggerService,
      useFactory: () => {
        // Lógica para decidir qué servicio de registro utilizar según la configuración
        const useFileLogger = false; // Puedes cambiar esto según la configuración de tu aplicación
        if (useFileLogger) {
          return new FileLoggerService();
        } else {
          return new ConsoleLoggerService();
        }
      },
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
