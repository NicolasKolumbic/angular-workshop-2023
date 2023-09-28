import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchOfSubstitutesComponent } from './bench-of-substitutes.component';

describe('BenchOfSubstitutesComponent', () => {
  let component: BenchOfSubstitutesComponent;
  let fixture: ComponentFixture<BenchOfSubstitutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenchOfSubstitutesComponent]
    });
    fixture = TestBed.createComponent(BenchOfSubstitutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
