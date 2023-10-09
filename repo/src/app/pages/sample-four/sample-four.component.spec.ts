import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleFourComponent } from './sample-four.component';

describe('SampleFourComponent', () => {
  let component: SampleFourComponent;
  let fixture: ComponentFixture<SampleFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleFourComponent]
    });
    fixture = TestBed.createComponent(SampleFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
