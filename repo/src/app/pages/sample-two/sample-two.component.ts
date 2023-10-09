import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-sample-two',
  templateUrl: './sample-two.component.html',
  styleUrls: ['./sample-two.component.scss']
})
export class SampleTwoComponent  implements AfterViewInit {

  @ViewChild('card', {static: false}) card!: TemplateRef<HTMLElement>;

  constructor(
    private viewContainerRef: ViewContainerRef
  ) {}

  ngAfterViewInit(): void {
    this.viewContainerRef.createEmbeddedView(this.card);
  }
}
