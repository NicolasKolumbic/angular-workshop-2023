import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedReactiveFormComponent } from './validated-reactive-form.component';

describe('ValidatedReactiveFormComponent', () => {
  let component: ValidatedReactiveFormComponent;
  let fixture: ComponentFixture<ValidatedReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidatedReactiveFormComponent]
    });
    fixture = TestBed.createComponent(ValidatedReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
