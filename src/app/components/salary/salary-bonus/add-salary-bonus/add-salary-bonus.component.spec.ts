import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalaryBonusComponent } from './add-salary-bonus.component';

describe('AddSalaryBonusComponent', () => {
  let component: AddSalaryBonusComponent;
  let fixture: ComponentFixture<AddSalaryBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSalaryBonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSalaryBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
