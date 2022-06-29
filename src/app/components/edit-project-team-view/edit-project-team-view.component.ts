import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from 'src/app/models/project.model';
import { EditProjectComponent } from '../edit-project/edit-project.component';
@Component({
  selector: 'app-edit-project-team-view',
  templateUrl: './edit-project-team-view.component.html',
  styleUrls: ['./edit-project-team-view.component.css'],
})
export class EditProjectTeamViewComponent implements OnInit {
  constructor(
    private EmployeeDialog: MatDialogRef<EditProjectTeamViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { parent: EditProjectComponent; project: Project }
  ) {}

  ngOnInit(): void {}
  close() {
    this.EmployeeDialog.close();
  }
}
