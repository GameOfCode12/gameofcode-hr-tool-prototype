import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Project } from 'src/app/models/project.model';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectsComponent } from '../projects/projects.component';
import { EditProjectTeamViewComponent } from '../edit-project-team-view/edit-project-team-view.component';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
})
export class EditProjectComponent implements OnInit {
  project: Project = this.data.project;
  reducedEmployees: Employee[] = [];
  constructor(
    public dialogRef: MatDialogRef<EditProjectComponent>,
    private formBuilder: FormBuilder,
    private employeedialog: MatDialog,
    @Inject(MAT_DIALOG_DATA)
    public data: { project: Project; parent: ProjectsComponent }
  ) {}

  editProjectForm = this.formBuilder.group({
    name: ['', Validators.required],
  });

  private getProject(): void {
    this.editProjectForm.patchValue({
      name: this.data.project.name,
    });
    for (let i = 0; i <= this.project.employees.length; i++) {
      if (i === 5) {
        return;
      } else {
        this.reducedEmployees.push(this.project.employees[i]);
      }
    }
  }
  openEmployeesViewDialog(project: Project) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '650px';
    dialogConfig.minHeight = 'fit-content';
    dialogConfig.data = {
      project,
    };
    this.employeedialog.open(EditProjectTeamViewComponent, dialogConfig);
    this.dialogRef.close();
  }

  updateProject(): void {
    const updatedProject: Project = {
      id: this.data.project.id,
      fte: this.data.project.fte,
      employees: this.data.project.employees,
      manager: this.data.project.manager,
      name: this.editProjectForm.controls.name.value,
    };
    this.dialogRef.close(updatedProject);
  }

  ngOnInit(): void {
    this.getProject();
  }
}
