import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ParentComponent,
    ChildComponent
  ]
})
export class SharedModule { }
