import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNonWorkingHolidayComponent } from './edit-non-working-holiday.component';

describe('EditNonWorkingHolidayComponent', () => {
  let component: EditNonWorkingHolidayComponent;
  let fixture: ComponentFixture<EditNonWorkingHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNonWorkingHolidayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNonWorkingHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
