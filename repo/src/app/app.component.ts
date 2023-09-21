import { Component } from '@angular/core';
import { PlayerDto } from './dtos/player.dto';
import { players } from 'src/assets/players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public players: PlayerDto[];

  constructor() {
    this.players = players;
  }

  filter(player: PlayerDto) {
    return player.age > 30;
  }
}
