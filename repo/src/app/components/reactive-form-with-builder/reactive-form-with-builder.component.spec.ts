import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormWithBuilderComponent } from './reactive-form-with-builder.component';

describe('ReactiveFormWithBuilderComponent', () => {
  let component: ReactiveFormWithBuilderComponent;
  let fixture: ComponentFixture<ReactiveFormWithBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormWithBuilderComponent]
    });
    fixture = TestBed.createComponent(ReactiveFormWithBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
