import { Component } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player.service';
import { PositionPlayer } from 'src/app/shared/enums/position-player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  goalKeepers: Player[] = [];

    constructor(private playerService: PlayerService) {
      const players = this.playerService.Players.filter((player: Player) => player.position === PositionPlayer.Goalkeeper);
      this.goalKeepers = players;
    }

    updatePlayer(player: Player) {
      if(player.isInside) {
        this.playerService.moveToBench(player);
      } else {
        this.playerService.moveToStadium(player);
      }
    }

     //this.goalKeepers = players.map((player: Player) => new Player(player));
     /*
      [
           {...players[0]} as Player,
           {...players[1]} as Player,
           {...players[2]} as Player,
      ] 
      * */ 

}
