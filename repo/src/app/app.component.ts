import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'repo';

  constructor(private pokemonService: PokemonService) {

  }
  ngOnInit(): void {
    this.pokemonService.getAll().subscribe((res) => {
      console.log(this.pokemonService.getAll())
    })
  }
}
