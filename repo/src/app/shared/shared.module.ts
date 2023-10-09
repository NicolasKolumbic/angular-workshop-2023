import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HostDirective } from './directives/host.directive';
import { DynamicComponentComponent } from './components/dynamic-component/dynamic-component.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HostDirective,
    DynamicComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HostDirective
  ]
})
export class SharedModule { }
