import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentModelCategoryComponent } from './equipment-model-category.component';

describe('EquipmentModelCategoryComponent', () => {
  let component: EquipmentModelCategoryComponent;
  let fixture: ComponentFixture<EquipmentModelCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentModelCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentModelCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
