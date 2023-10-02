import { Component, Input } from '@angular/core';
import { Player } from '../models/player';
import { PositionPlayer } from '../shared/enums/position-player';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  @Input() players: Player[] = [];

  get goalKeeper() {
    return this.players.filter((player: Player) => player.isInside && player.position === PositionPlayer.Goalkeeper);
  }

  get defence() {
    return this.players.filter((player: Player) => player.isInside && player.position === PositionPlayer.Defence);
  }

  get midfielder() {
    return this.players.filter((player: Player) => player.isInside && player.position === PositionPlayer.Midfielder);
  }

  get forward() {
    return this.players.filter((player: Player) => player.isInside && player.position === PositionPlayer.Forward);
  }

}
