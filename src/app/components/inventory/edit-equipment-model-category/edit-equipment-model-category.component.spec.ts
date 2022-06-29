import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquipmentModelCategoryComponent } from './edit-equipment-model-category.component';

describe('EditEquipmentModelCategoryComponent', () => {
  let component: EditEquipmentModelCategoryComponent;
  let fixture: ComponentFixture<EditEquipmentModelCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEquipmentModelCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEquipmentModelCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
