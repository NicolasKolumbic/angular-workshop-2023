import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
    @Output() setActive: EventEmitter<TabComponent> = new EventEmitter();
    @Input() isActive = false;
    @Input() label!: string;

    setActiveHandler() {
      this.setActive.emit(this);
    }
}
