import { Component } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  players: Player[] = [];

    constructor(
      private loggerService: LoggerService
    ) {
      this.loggerService.log('message from LoggerService')
    }
}
