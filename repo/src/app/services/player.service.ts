import { Injectable } from '@angular/core';
import { players } from '../../assets/players';
import { PlayerDto } from '../dtos/player-dto';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  
  players: Player[] = [];

  constructor() {
    // definimos que el JSON de jugadores luce como una ARRAY de jugadores
    this.players = players as Player[];
  }

  getAll() {
    console.log(this.players)
    // iteramos cada jugador y creamos una instancia de la clase PLAYER por cada iteracion
    // De esta forma reemplazamos PLAYERDTO por PLAYER.
    const playersModel = this.players.map((playerDto: PlayerDto) => new Player(playerDto));
    console.log(playersModel); 
    return this.players;
  }
}
