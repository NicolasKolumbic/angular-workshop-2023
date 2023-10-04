import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { PlayerDto } from '../dtos/player-dto';
import { players } from 'src/assets/players';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private players: Player[] = players.map((player: PlayerDto) => new Player(player));
 
  get Players() {
     return this.players;
  }
 
   moveToBench({fullName}: Player) {
     this.players = this.players.map((player: Player) => {
       if(fullName === player.fullName) {
         player.isInside = false;
       }
       return player;
    });
   }
 
   moveToStadium({fullName}: Player) {
     this.players = this.players.map((player: Player) => {
       if(fullName === player.fullName) {
         player.isInside = true;
       }
       return player;
    });
   }
}
