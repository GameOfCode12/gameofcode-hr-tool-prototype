import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquipmentCompanyComponent } from './add-equipment-company.component';

describe('AddEquipmentCompanyComponent', () => {
  let component: AddEquipmentCompanyComponent;
  let fixture: ComponentFixture<AddEquipmentCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEquipmentCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEquipmentCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
