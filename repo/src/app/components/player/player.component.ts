import { Component, Input } from '@angular/core';
import { PlayerDto } from 'src/app/dtos/player.dto';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

  @Input() player!: PlayerDto;

}
