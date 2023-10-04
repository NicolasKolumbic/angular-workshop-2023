import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { Dropdown } from '../models/dropdown';

@Component({
  selector: 'app-position-players-dropdown',
  templateUrl: './position-players-dropdown.component.html',
  styleUrls: ['./position-players-dropdown.component.scss']
 // changeDetection: ChangeDetectionStrategy.OnPush
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

    ngOnInit(): void {
      console.log('%cOnInit', 'background-color: #795548; color:white padding: 0.35rem 0.75rem');
    }
    ngAfterViewInit(): void {
      console.log('%cAfterViewInit', 'background-color: #795548; color:white padding: 0.35rem 0.75rem');
    }
    ngAfterContentInit(): void {
      console.log('%cAfterContentInit', 'background-color: #795548; color:white padding: 0.35rem 0.75rem');
    }
    ngAfterContentChecked(): void {
      console.log('%cAfterContentChecked', 'background-color: #795548; color:white padding: 0.35rem 0.75rem');
    }
    ngAfterViewChecked(): void {
      console.log('%cAfterViewChecked', 'background-color: #795548; color:white padding: 0.35rem 0.75rem');
    }
    ngDoCheck(): void {
      console.log('%cDoCheck', 'background-color: #795548; color:white padding: 0.35rem 0.75rem');
    }
    
    isUpdate() {
      console.log('%cPositionPlayersDropdownComponent', 'background-color: #795548; color:white padding: 0.35rem 0.75rem'); 
    }

}
