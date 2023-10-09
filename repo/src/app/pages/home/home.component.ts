import { Component } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  players: Player[] = [];

  constructor(
    private playerService: PlayerService
  ) {
    this.players = this.playerService.getAll();
  }

 
}
