import { Component, Inject } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { AppConfig } from 'src/app/abstractions/app-config';
import { APP_CONFIG } from 'src/app/app.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  players: Player[] = [];
  loggerService: any;

  constructor(
   @Inject(APP_CONFIG) config: AppConfig
  ) {
    console.log(config);
  }
}


