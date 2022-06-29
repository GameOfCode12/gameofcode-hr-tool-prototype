import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquipmentModelComponent } from './edit-equipment-model.component';

describe('EditEquipmentModelComponent', () => {
  let component: EditEquipmentModelComponent;
  let fixture: ComponentFixture<EditEquipmentModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEquipmentModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEquipmentModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
