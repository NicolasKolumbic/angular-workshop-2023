import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
 // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent {
    @Input() player!: Player;

    update(event: Event, player: Player) {
      player.isInside = !player.isInside;
  }

  ngOnInit(): void {
    console.log('%cOnInit', 'background-color: black; color:white padding: 0.35rem 0.75rem');
  }
  ngAfterViewInit(): void {
    console.log('%cAfterViewInit', 'background-color: black; color:white padding: 0.35rem 0.75rem');
  }
  ngAfterContentInit(): void {
    console.log('%cAfterContentInit', 'background-color: black; color:white padding: 0.35rem 0.75rem');
  }
  ngAfterContentChecked(): void {
    console.log('%cAfterContentChecked', 'background-color: black; color:white padding: 0.35rem 0.75rem');
  }
  ngAfterViewChecked(): void {
    console.log('%cAfterViewChecked', 'background-color: black; color:white padding: 0.35rem 0.75rem');
  }
  ngDoCheck(): void {
    console.log('%cDoCheck', 'background-color: black; color:white padding: 0.35rem 0.75rem');
  }
  
  isUpdate() {
    console.log('%cPlayerComponent', 'background-color: black; color:white padding: 0.35rem 0.75rem'); 
  }
}
