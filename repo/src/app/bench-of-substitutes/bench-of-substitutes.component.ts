import { Component, Input } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-bench-of-substitutes',
  templateUrl: './bench-of-substitutes.component.html',
  styleUrls: ['./bench-of-substitutes.component.scss']
})
export class BenchOfSubstitutesComponent {
    @Input() players: Player[] = [];

    update(event: Event, player: Player) {
        player.isInside = !player.isInside;
    }
}
