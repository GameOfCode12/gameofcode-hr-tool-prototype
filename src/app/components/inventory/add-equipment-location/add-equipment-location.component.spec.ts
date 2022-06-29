import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquipmentLocationComponent } from './add-equipment-location.component';

describe('AddEquipmentLocationComponent', () => {
  let component: AddEquipmentLocationComponent;
  let fixture: ComponentFixture<AddEquipmentLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEquipmentLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEquipmentLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
