import { Directive, DoCheck, EmbeddedViewRef, Injector, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { PlayerComponent } from '../components/player/player.component';
import { PlayerDto } from '../dtos/player.dto';

@Directive({
  selector: '[appFilterPlayer]'
})
class FilterPlayerDirective<T> implements DoCheck {

  @Input() appFilterPlayerOf: T[] | undefined;
  @Input() appFilterPlayerElse!: TemplateRef<any>;
  @Input() appFilterPlayerConditional!: (item: T) => boolean;

   constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }


  ngDoCheck(): void {
    if (!this.appFilterPlayerOf || this.appFilterPlayerOf.length === 0) {
      this.viewContainer.createEmbeddedView(this.appFilterPlayerElse);
    } else {
      const isTrue = this.appFilterPlayerConditional;
      this.appFilterPlayerOf.forEach((player: T) => {
        if(isTrue(player)) {
          const componentRef = this.viewContainer.createComponent(PlayerComponent);
          componentRef.instance.player = player as PlayerDto;
        }
       
      });
    }
  }

}

export { FilterPlayerDirective as AppFilterPlayer };
