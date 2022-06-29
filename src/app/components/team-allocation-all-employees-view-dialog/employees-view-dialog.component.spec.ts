import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesViewDialogComponent } from './employees-view-dialog.component';

describe('EmployeesViewDialogComponent', () => {
  let component: EmployeesViewDialogComponent;
  let fixture: ComponentFixture<EmployeesViewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesViewDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
