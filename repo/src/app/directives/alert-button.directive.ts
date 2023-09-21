import { Directive, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';


@Directive({
  selector: '[appAlertButton]'
})
export class AlertButtonDirective {

  button!: ElementRef<HTMLButtonElement>

  constructor(private el: ElementRef) {
    this.button = this.el;
    this.button.nativeElement.classList.add('alert-button');
    fromEvent(this.button.nativeElement, 'click').subscribe(this.showAlert);
 }

  showAlert() {
    alert('Show Alert');
  }

}
