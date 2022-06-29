import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReferralComponent } from './edit-referral.component';

describe('EditReferralComponent', () => {
  let component: EditReferralComponent;
  let fixture: ComponentFixture<EditReferralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditReferralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
