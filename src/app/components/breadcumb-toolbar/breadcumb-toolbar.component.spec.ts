import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcumbToolbarComponent } from './breadcumb-toolbar.component';

describe('BreadcumbToolbarComponent', () => {
  let component: BreadcumbToolbarComponent;
  let fixture: ComponentFixture<BreadcumbToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcumbToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcumbToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
