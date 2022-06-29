import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAllocationComponent } from './team-allocation.component';

describe('TeamAllocationComponent', () => {
  let component: TeamAllocationComponent;
  let fixture: ComponentFixture<TeamAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamAllocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
