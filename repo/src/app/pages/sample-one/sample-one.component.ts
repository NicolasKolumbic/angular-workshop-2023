import { Component } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-sample-one',
  templateUrl: './sample-one.component.html',
  styleUrls: ['./sample-one.component.scss']
})
export class SampleOneComponent {

  players: Player[] = [];

  constructor(private playerService: PlayerService) {
    this.players = this.playerService.getAll();
  }
}
