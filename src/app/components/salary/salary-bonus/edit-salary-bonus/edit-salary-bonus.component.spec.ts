import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSalaryBonusComponent } from './edit-salary-bonus.component';

describe('EditSalaryBonusComponent', () => {
  let component: EditSalaryBonusComponent;
  let fixture: ComponentFixture<EditSalaryBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSalaryBonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSalaryBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
