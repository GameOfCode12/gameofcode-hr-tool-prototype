import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSupplierComponent } from './equipment-supplier.component';

describe('EquipmentSupplierComponent', () => {
  let component: EquipmentSupplierComponent;
  let fixture: ComponentFixture<EquipmentSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
