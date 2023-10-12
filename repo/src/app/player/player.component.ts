import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent {
    @Input() player!: Player;

    update(event: Event, player: Player) {
      player.isInside = !player.isInside;
  }

  isUpdate() {
    console.log('%cPlayerComponent', 'background-color: black; color:white padding: 0.35rem 0.75rem'); 
  }
}
