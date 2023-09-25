import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
      path: '',
      component: ProductListComponent
  },
  {
      path: 'shopping-cart',
      component: ShoppingCartComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
