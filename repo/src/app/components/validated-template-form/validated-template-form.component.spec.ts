import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedTemplateFormComponent } from './validated-template-form.component';

describe('ValidatedTemplateFormComponent', () => {
  let component: ValidatedTemplateFormComponent;
  let fixture: ComponentFixture<ValidatedTemplateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidatedTemplateFormComponent]
    });
    fixture = TestBed.createComponent(ValidatedTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
