import { 
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit
} from '@angular/core';
import { PlayersService } from './services/players.service';
import { Player } from './models/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked, DoCheck {

  coach: string = 'Lionel Scaloni';
  players: Player[] = [];

  constructor(private playersService: PlayersService) {
      this.players = this.playersService.Players;
  }
  ngOnInit(): void {
    console.log('%cOnInit', 'background-color: red; color:white padding: 0.35rem 0.75rem');
  }
  ngAfterViewInit(): void {
    console.log('%cAfterViewInit', 'background-color: red; color:white padding: 0.35rem 0.75rem');
  }
  ngAfterContentInit(): void {
    console.log('%cAfterContentInit', 'background-color: red; color:white padding: 0.35rem 0.75rem');
  }
  ngAfterContentChecked(): void {
    console.log('%cAfterContentChecked', 'background-color: red; color:white padding: 0.35rem 0.75rem');
  }
  ngAfterViewChecked(): void {
    console.log('%cAfterViewChecked', 'background-color: red; color:white padding: 0.35rem 0.75rem');
  }
  ngDoCheck(): void {
    console.log('%cDoCheck', 'background-color: red; color:white padding: 0.35rem 0.75rem');
  }
  
  isUpdate() {
    console.log('%cChangeStrategyDetectionPageComponent', 'background-color: red; color:white padding: 0.35rem 0.75rem'); 
  }
}
