import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionPlayersDropdownComponent } from './position-players-dropdown.component';

describe('PositionPlayersDropdownComponent', () => {
  let component: PositionPlayersDropdownComponent;
  let fixture: ComponentFixture<PositionPlayersDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PositionPlayersDropdownComponent]
    });
    fixture = TestBed.createComponent(PositionPlayersDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
