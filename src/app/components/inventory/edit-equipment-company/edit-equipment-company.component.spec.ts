import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquipmentCompanyComponent } from './edit-equipment-company.component';

describe('EditEquipmentCompanyComponent', () => {
  let component: EditEquipmentCompanyComponent;
  let fixture: ComponentFixture<EditEquipmentCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEquipmentCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEquipmentCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
