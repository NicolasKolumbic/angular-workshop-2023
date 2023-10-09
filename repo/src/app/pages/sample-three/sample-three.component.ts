import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { HostDirective } from '../../shared/directives/host.directive';
import { DynamicComponentComponent } from 'src/app/shared/components/dynamic-component/dynamic-component.component';

@Component({
  selector: 'app-sample-three',
  templateUrl: './sample-three.component.html',
  styleUrls: ['./sample-three.component.scss']
})
export class SampleThreeComponent implements AfterViewInit {
  @ViewChild('card', {static: false}) card!: TemplateRef<HTMLElement>;

  constructor(
    private viewContainerRef: ViewContainerRef
  ) {}

  ngAfterViewInit(): void {
    const componentRef =  this.viewContainerRef.createComponent<DynamicComponentComponent>(DynamicComponentComponent);
    componentRef.instance.data = 'Algun informacion enviada al componente creado dinamicamente';
  }
 

}
