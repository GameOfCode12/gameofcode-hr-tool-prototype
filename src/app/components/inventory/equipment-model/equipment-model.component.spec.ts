import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentModelComponent } from './equipment-model.component';

describe('EquipmentModelsComponent', () => {
  let component: EquipmentModelComponent;
  let fixture: ComponentFixture<EquipmentModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
