import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeamAllocationComponent } from '../team-allocation/team-allocation.component';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-employees-view-dialog',
  templateUrl: './employees-view-dialog.component.html',
  styleUrls: ['./employees-view-dialog.component.css'],
})
export class EmployeesViewDialogComponent implements OnInit {
  constructor(
    private EmployeeDialog: MatDialogRef<EmployeesViewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { parent: TeamAllocationComponent; project: Project }
  ) {}

  ngOnInit(): void {}
  close() {
    this.EmployeeDialog.close();
  }
}
