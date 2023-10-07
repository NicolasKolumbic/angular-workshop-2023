import { Injectable } from '@angular/core';
import { players } from '../../assets/players';
import { Player } from '../models/player.model';
import { PlayerDto } from '../dtos/player.dto';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  
  players: Player[] = [];

  getAll() {
    this.players = players.map((playerDto: PlayerDto) => new Player(playerDto));
    return this.players;
  }
}
