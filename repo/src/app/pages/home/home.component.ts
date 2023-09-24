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
  // Este consumirá el servicio que hemos creado.
    constructor(private playerService: PlayerService) {
      this.players = this.playerService.getAll();
    }
}
