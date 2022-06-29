import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquipmentLocationComponent } from './edit-equipment-location.component';

describe('EditEquipmentLocationComponent', () => {
  let component: EditEquipmentLocationComponent;
  let fixture: ComponentFixture<EditEquipmentLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEquipmentLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEquipmentLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
