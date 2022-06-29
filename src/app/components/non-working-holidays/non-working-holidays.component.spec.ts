import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonWorkingHolidaysComponent } from './non-working-holidays.component';

describe('NonWorkingHolidaysComponent', () => {
  let component: NonWorkingHolidaysComponent;
  let fixture: ComponentFixture<NonWorkingHolidaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonWorkingHolidaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonWorkingHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
