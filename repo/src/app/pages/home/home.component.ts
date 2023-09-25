import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private loggerService: LoggerService) {}

  logMessage() {
    this.loggerService.log('Este es un mensaje de registro');
  }
 
}
