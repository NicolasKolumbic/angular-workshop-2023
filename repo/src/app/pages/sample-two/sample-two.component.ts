import { Component } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player.service';


@Component({
  selector: 'app-sample-two',
  templateUrl: './sample-two.component.html',
  styleUrls: ['./sample-two.component.scss']
})
export class SampleTwoComponent {
  players: Player[] = [];


  constructor(private playerService: PlayerService) {
    this.players = this.playerService.getAll();
  }
}
