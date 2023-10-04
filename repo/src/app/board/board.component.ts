import { Component, Input } from '@angular/core';
import { Player } from '../models/player';
import { PositionPlayer } from '../shared/enums/position-player';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  @Input() players: Player[] = [];

  get goalKeeper() {
    return this.players.filter((player: Player) => player.isInside && player.position === PositionPlayer.Goalkeeper);
  }

  get defence() {
    return this.players.filter((player: Player) => player.isInside && player.position === PositionPlayer.Defence);
  }

  get midfielder() {
    return this.players.filter((player: Player) => player.isInside && player.position === PositionPlayer.Midfielder);
  }

  get forward() {
    return this.players.filter((player: Player) => player.isInside && player.position === PositionPlayer.Forward);
  }

  ngOnInit(): void {
    console.log('%cOnInit', 'background-color: #009688; color:white padding: 0.35rem 0.75rem');
  }
  ngAfterViewInit(): void {
    console.log('%cAfterViewInit', 'background-color: #009688; color:white padding: 0.35rem 0.75rem');
  }
  ngAfterContentInit(): void {
    console.log('%cAfterContentInit', 'background-color: #009688; color:white padding: 0.35rem 0.75rem');
  }
  ngAfterContentChecked(): void {
    console.log('%cAfterContentChecked', 'background-color: #009688; color:white padding: 0.35rem 0.75rem');
  }
  ngAfterViewChecked(): void {
    console.log('%cAfterViewChecked', 'background-color: #009688; color:white padding: 0.35rem 0.75rem');
  }
  ngDoCheck(): void {
    console.log('%cDoCheck', 'background-color: #009688; color:white padding: 0.35rem 0.75rem');
  }
  
  isUpdate() {
    console.log('%cBoardComponent', 'background-color: #009688; color:white padding: 0.35rem 0.75rem'); 
  }

}
