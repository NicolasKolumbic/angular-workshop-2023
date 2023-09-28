import { Component, Input } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  @Input() players: Player[] = [];
}
