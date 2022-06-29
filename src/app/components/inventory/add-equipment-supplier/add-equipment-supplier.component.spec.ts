import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquipmentSupplierComponent } from './add-equipment-supplier.component';

describe('AddEquipmentSupplierComponent', () => {
  let component: AddEquipmentSupplierComponent;
  let fixture: ComponentFixture<AddEquipmentSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEquipmentSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEquipmentSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
