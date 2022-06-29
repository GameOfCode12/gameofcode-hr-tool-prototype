import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Salary } from 'src/app/models/salary.model';
import { SalaryComponent } from '../salary.component';

@Component({
  selector: 'app-view-salary-comment',
  templateUrl: './view-salary-comment.component.html',
  styleUrls: ['./view-salary-comment.component.css'],
})
export class ViewSalaryCommentComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { salary: Salary; parent: SalaryComponent }
  ) {}

  ngOnInit(): void {}
}
