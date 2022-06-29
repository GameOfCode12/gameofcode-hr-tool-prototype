import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquipmentModelComponent } from './add-equipment-model.component';

describe('AddEquipmentModelComponent', () => {
  let component: AddEquipmentModelComponent;
  let fixture: ComponentFixture<AddEquipmentModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEquipmentModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEquipmentModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
