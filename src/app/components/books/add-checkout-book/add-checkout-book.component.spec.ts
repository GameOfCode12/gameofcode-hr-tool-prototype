import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCheckoutBookComponent } from './add-checkout-book.component';

describe('AddCheckoutBookComponent', () => {
  let component: AddCheckoutBookComponent;
  let fixture: ComponentFixture<AddCheckoutBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCheckoutBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCheckoutBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
