import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCheckoutBookComponent } from './edit-checkout-book.component';

describe('EditCheckoutBookComponent', () => {
  let component: EditCheckoutBookComponent;
  let fixture: ComponentFixture<EditCheckoutBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCheckoutBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCheckoutBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
