import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquipmentModelCategoryComponent } from './add-equipment-model-category.component';

describe('AddEquipmentModelCategoryComponent', () => {
  let component: AddEquipmentModelCategoryComponent;
  let fixture: ComponentFixture<AddEquipmentModelCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEquipmentModelCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEquipmentModelCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
