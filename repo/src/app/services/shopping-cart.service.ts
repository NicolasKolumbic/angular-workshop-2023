import { Injectable } from '@angular/core';
import { ShoppingCartItem } from '../models/shopping-cart-item';
import { products } from '../../assets/products';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  products: ShoppingCartItem[] = [];

  constructor() {
    this.products = products;
  }

  add(product: ShoppingCartItem) {
    this.products.push(product)
  }

  remove(item: ShoppingCartItem) {
    this.products = this.products.filter((product: ShoppingCartItem) => product.productName === item.productName);
  }
}
