import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartBoardComponent } from './shopping-cart-board.component';

describe('ShoppingCartBoardComponent', () => {
  let component: ShoppingCartBoardComponent;
  let fixture: ComponentFixture<ShoppingCartBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingCartBoardComponent]
    });
    fixture = TestBed.createComponent(ShoppingCartBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
