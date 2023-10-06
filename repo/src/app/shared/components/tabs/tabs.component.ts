import { AfterContentInit, AfterViewInit, Component, ContentChildren, QueryList, ViewChild, ViewContainerRef } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { HostDirective } from '../../directives/host.directive';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit, AfterViewInit {

@ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

tabsList: TabComponent[] = [];

setActive(label: string) {
  this.tabs.forEach((tab: TabComponent) => {
    if(tab.label === label) {
      tab.isActive = true;
    } else {
      tab.isActive = false;
    }
  })
}

  ngAfterContentInit(): void {
    this.tabs.forEach((tab: TabComponent) => {
        tab.setActive.subscribe((tab: TabComponent) =>this.setActive(tab.label));
    })
  }

  ngAfterViewInit(): void {
    this.tabs.forEach((tab: TabComponent) => {
      this.tabsList.push(tab);
    })
  }

}
