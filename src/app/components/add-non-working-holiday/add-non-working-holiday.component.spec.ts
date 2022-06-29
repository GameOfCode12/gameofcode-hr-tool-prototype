import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNonWorkingHolidayComponent } from './add-non-working-holiday.component';

describe('AddNonWorkingHolidayComponent', () => {
  let component: AddNonWorkingHolidayComponent;
  let fixture: ComponentFixture<AddNonWorkingHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNonWorkingHolidayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNonWorkingHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
