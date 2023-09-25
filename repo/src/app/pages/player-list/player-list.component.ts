import { Component } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player.service';
import { PositionPlayer } from '../../shared/enums/position-player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent {
  goalKeepers: Player[] = [];

  constructor(private playerService: PlayerService) {
    this.goalKeepers = this.playerService.Players.filter((player: Player) => player.position === PositionPlayer.Goalkeeper); 
  }

  updatePlayer(player: Player) {
    if(player.isInside) {
      this.playerService.moveToBench(player);
    } else {
      this.playerService.moveToStadium(player);
    }
  }
  
}
