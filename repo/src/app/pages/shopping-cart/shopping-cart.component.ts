import { Component } from '@angular/core';
import { ShoppingCartItem } from 'src/app/models/shopping-cart-item';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
    public shoppingCartItems: ShoppingCartItem[] = [];

    constructor(private shoppingCartService: ShoppingCartService) {
      this.shoppingCartItems = this.shoppingCartService.products;
  }


}
