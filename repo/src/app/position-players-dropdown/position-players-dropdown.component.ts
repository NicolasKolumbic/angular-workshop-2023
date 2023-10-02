import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { Dropdown } from '../models/dropdown';

@Component({
  selector: 'app-position-players-dropdown',
  templateUrl: './position-players-dropdown.component.html',
  styleUrls: ['./position-players-dropdown.component.scss']
})
export class PositionPlayersDropdownComponent {

    @Input() count!: number;
    @Input() placeholder!: string;
    @Input() selectedPlayers!: Player[];

    get playersDropdown() {
      const playersDropdownList = [];
      let count = 0;
      while(count < this.count) {
        const dropdown = new Dropdown(this.selectedPlayers);
        playersDropdownList.push(dropdown);
        count++;
      }
      return playersDropdownList;
    }

    update(event: Event, dropdown: Dropdown) {
      const dropdownControl = event.target as HTMLSelectElement;

    }

   

}
