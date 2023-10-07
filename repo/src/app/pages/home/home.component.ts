import { Component } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/players.service';
import { PositionPlayer } from 'src/app/shared/enums/position-player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private players: Player[] = [];

  get goalkeeper() {
    return this.players.filter((player: Player) => player.position === PositionPlayer.Goalkeeper )
  }

  constructor(private playerService: PlayerService) {
      this.players = this.playerService.getAll();
  }
}
