import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVacationDaysComponent } from './my-vacation-days.component';

describe('MyVacationDaysComponent', () => {
  let component: MyVacationDaysComponent;
  let fixture: ComponentFixture<MyVacationDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyVacationDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVacationDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
