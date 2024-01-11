import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSlotDisplayerComponent } from './time-slot-displayer.component';

describe('TimeSlotDisplayerComponent', () => {
  let component: TimeSlotDisplayerComponent;
  let fixture: ComponentFixture<TimeSlotDisplayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeSlotDisplayerComponent]
    });
    fixture = TestBed.createComponent(TimeSlotDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
