import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSalaryComponent } from './detail-salary.component';

describe('DetailSalaryComponent', () => {
  let component: DetailSalaryComponent;
  let fixture: ComponentFixture<DetailSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSalaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
