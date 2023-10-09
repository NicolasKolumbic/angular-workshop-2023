import { Component, TemplateRef, ViewChild } from '@angular/core';
import { HostDirective } from 'src/app/shared/directives/host.directive';

@Component({
  selector: 'app-sample-four',
  templateUrl: './sample-four.component.html',
  styleUrls: ['./sample-four.component.scss']
})
export class SampleFourComponent {
  @ViewChild('card', { static: false }) card!: TemplateRef<HTMLElement>;
  @ViewChild(HostDirective, { static: true }) host!: HostDirective;

  ngAfterViewInit(): void {
    this.host.viewContainerRef.createEmbeddedView(this.card);
  }
}
