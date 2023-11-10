import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTwoComponent } from './sample-two.component';

describe('SampleTwoComponent', () => {
  let component: SampleTwoComponent;
  let fixture: ComponentFixture<SampleTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleTwoComponent]
    });
    fixture = TestBed.createComponent(SampleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
