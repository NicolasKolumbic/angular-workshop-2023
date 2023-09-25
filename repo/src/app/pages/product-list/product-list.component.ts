import { Component } from '@angular/core';
import { ShoppingCartItem } from 'src/app/models/shopping-cart-item';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products: ShoppingCartItem[] = [];

  constructor(private shoppingCartService: ShoppingCartService) {
      this.products = this.shoppingCartService.products;
  }

  add(item: ShoppingCartItem) {
      this.shoppingCartService.products.map((product: ShoppingCartItem) => {
          if(item.productName === product.productName) {
            product.count++;
          }
          return product;
      })
  }

  remove(item: ShoppingCartItem) {
    if(item.count > 0) {
      this.shoppingCartService.products.map((product: ShoppingCartItem) => {
        if(item.productName === product.productName) {
          product.count--;
        }
        return product;
      })
    }   
  }
  
}
