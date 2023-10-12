import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-bench-of-substitutes',
  templateUrl: './bench-of-substitutes.component.html',
  styleUrls: ['./bench-of-substitutes.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class BenchOfSubstitutesComponent {
    @Input() players: Player[] = [];

    isUpdate() {
      console.log('%cBenchOfSubstitutesComponent', 'background-color: #ff8c00; color:white padding: 0.35rem 0.75rem'); 
    }
}
