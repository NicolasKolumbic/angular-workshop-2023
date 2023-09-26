import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  messageFromChild: string = '';
  parentValue: string = '';


  catchMessageFromChild(message: string) {
    this.messageFromChild = message;
  }
}
