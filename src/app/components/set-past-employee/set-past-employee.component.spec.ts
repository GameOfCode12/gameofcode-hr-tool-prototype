import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPastEmployeeComponent } from './set-past-employee.component';

describe('SetPastEmployeeComponent', () => {
  let component: SetPastEmployeeComponent;
  let fixture: ComponentFixture<SetPastEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetPastEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPastEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
