import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutEquipmentComponent } from './checkout-equipment.component';

describe('CheckoutEquipmentComponent', () => {
  let component: CheckoutEquipmentComponent;
  let fixture: ComponentFixture<CheckoutEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
