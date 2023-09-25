import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { ShoppingCartBoardComponent } from './components/shopping-cart-board/shopping-cart-board.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartBoardComponent
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartBoardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
