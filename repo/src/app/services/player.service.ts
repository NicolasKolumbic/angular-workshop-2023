import { Injectable } from '@angular/core';
import { players } from '../../assets/players';
import { PlayerDto } from '../dtos/player-dto';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  
 private players: Player[] = players.map((player: PlayerDto) => new Player(player));

 constructor() {
  console.log(this.players);
 }

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
