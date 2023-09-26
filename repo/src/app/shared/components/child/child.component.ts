import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() value = '';
  @Output() messageToParent: EventEmitter<string> = new EventEmitter<string>();

  childValue!: string;
  
  sendToParent(event: Event) {
    this.messageToParent.emit(this.childValue);
  }
}
