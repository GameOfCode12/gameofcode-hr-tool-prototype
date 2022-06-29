import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentCompanyComponent } from './equipment-company.component';

describe('EquipmentCompanyComponent', () => {
  let component: EquipmentCompanyComponent;
  let fixture: ComponentFixture<EquipmentCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
