import { Component } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  players: Player[] = [];

  // injectamos el servicio en el CONSTRUCTOR de la CLASE que actua como COMPONENTE.
    constructor(private playerService: PlayerService) {
      const data = this.playerService.getAll();
    }
}
