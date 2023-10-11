import { Component, Type } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player.service';
import { PlayerComponent } from 'src/app/shared/components/player/player.component';


@Component({
  selector: 'app-sample-three',
  templateUrl: './sample-three.component.html',
  styleUrls: ['./sample-three.component.scss']
})
export class SampleThreeComponent {
  players: Player[] = [];
  playerComponent: Type<PlayerComponent> = PlayerComponent;

  constructor(private playerService: PlayerService) {
    this.players = this.playerService.getAll();
  }
}
