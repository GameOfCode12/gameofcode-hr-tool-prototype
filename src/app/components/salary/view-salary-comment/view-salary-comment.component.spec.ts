import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSalaryCommentComponent } from './view-salary-comment.component';

describe('ViewSalaryCommentComponent', () => {
  let component: ViewSalaryCommentComponent;
  let fixture: ComponentFixture<ViewSalaryCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSalaryCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSalaryCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
