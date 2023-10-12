import { 
  Component
} from '@angular/core';
import { PlayersService } from './services/players.service';
import { Player } from './models/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  coach: string = 'Lionel Scaloni';
  players: Player[] = [];

  constructor(private playersService: PlayersService) {
      this.players = this.playersService.Players;
  }
  
  isUpdate() {
    console.log('%cChangeStrategyDetectionPageComponent', 'background-color: red; color:white padding: 0.35rem 0.75rem'); 
  }
}
