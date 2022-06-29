import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectTeamViewComponent } from './edit-project-team-view.component';

describe('EditProjectTeamViewComponent', () => {
  let component: EditProjectTeamViewComponent;
  let fixture: ComponentFixture<EditProjectTeamViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProjectTeamViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectTeamViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
