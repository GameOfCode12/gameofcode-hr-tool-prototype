import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquipmentSupplierComponent } from './edit-equipment-supplier.component';

describe('EditEquipmentSupplierComponent', () => {
  let component: EditEquipmentSupplierComponent;
  let fixture: ComponentFixture<EditEquipmentSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEquipmentSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEquipmentSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
