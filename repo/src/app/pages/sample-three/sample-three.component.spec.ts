import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleThreeComponent } from './sample-three.component';

describe('SampleThreeComponent', () => {
  let component: SampleThreeComponent;
  let fixture: ComponentFixture<SampleThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleThreeComponent]
    });
    fixture = TestBed.createComponent(SampleThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
