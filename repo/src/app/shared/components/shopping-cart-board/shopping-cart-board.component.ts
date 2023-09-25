import { Component } from '@angular/core';
import { ShoppingCartItem } from 'src/app/models/shopping-cart-item';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-board',
  templateUrl: './shopping-cart-board.component.html',
  styleUrls: ['./shopping-cart-board.component.scss']
})
export class ShoppingCartBoardComponent {
  public shoppingCartItems: ShoppingCartItem[] = [];

  constructor(private shoppingCartService: ShoppingCartService) {
    this.shoppingCartItems = this.shoppingCartService.products;
}
}
