import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeamAllocationComponent } from './edit-team-allocation.component';

describe('EditTeamAllocationComponent', () => {
  let component: EditTeamAllocationComponent;
  let fixture: ComponentFixture<EditTeamAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTeamAllocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTeamAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
