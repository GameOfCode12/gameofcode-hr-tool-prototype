import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { Employee } from '../../models/employee.model';
import { Project } from 'src/app/models/project.model';
import { Router } from '@angular/router';
import { RoutePaths } from 'src/app/route-paths.enum';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeamAllocationComponent } from '../team-allocation/team-allocation.component';
import { Store } from '@ngrx/store';
import { EmployeesState } from 'src/app/states/employees.state';
import * as EmployeesActions from '../../actions/employees.actions';
@Component({
  selector: 'app-edit-team-allocation',
  templateUrl: './edit-team-allocation.component.html',
  styleUrls: ['./edit-team-allocation.component.css'],
})
export class EditTeamAllocationComponent implements OnInit {
  project: Project;
  members: Employee[];
  employees: Employee[];
  managers: Employee[] = [];
  uniqueManagers: Employee[] = [];
  filteredEmployees: Employee[];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location,
    public dialogRef: MatDialogRef<EditTeamAllocationComponent>,
    private store: Store<EmployeesState>,
    @Inject(MAT_DIALOG_DATA)
    public data: { project: Project; parent: TeamAllocationComponent }
  ) {}
  editProjectForm = this.formBuilder.group({
    manager: [''],
    employee: [''],
    fte: [''],
  });

  private getProject(): void {
    this.editProjectForm.patchValue({
      name: this.data.project.name,
      manager: this.data.project.manager !== null ? this.data.project.manager.id : null,
      employees: this.data.project.employees,
      fte: this.data.project.fte,
    });
    this.project = this.data.project;
  }

  private fetchEmployees() {
    this.store.dispatch(new EmployeesActions.GetEmployees());
    this.store.select('employees').subscribe((response: any) => {
      if (response?.employees) {
        this.employees = response.employees;
        this.filteredEmployees = this.employees;
        this.filterEmployees();
      }
    });
  }

  private filterEmployees() {
    this.members = this.data.project.employees;
    const ids = this.members.map((e) => e.id);
    this.filteredEmployees = this.employees.filter((employee) => !ids.includes(employee.id));
  }

  deleteEmployeeOnProject(member: Employee) {
    const index: number = this.members.findIndex((e) => e.id === member.id);
    if (index !== -1) {
      this.members = [...this.members];
      this.members.splice(index, 1);
      this.filterEmployees();
    }
  }

  addEmployeeOnProject(employee: Employee) {
    this.members = [...this.members, employee];
    this.filterEmployees();
  }

  updateProject() {
    const updatedProject: Project = {
      id: this.data.project.id,
      name: this.data.project.name,
      fte: this.editProjectForm.controls.fte.value,
      manager: this.editProjectForm.controls.manager.value,
      employees: this.members,
    };
    this.dialogRef.close(updatedProject);
  }

  goBack(): void {
    this.location.back();
  }

  myTabSelectedIndexChange(index: number) {
    if (index === 1) {
      this.router.navigate([`${RoutePaths.TeamAllocation}`]);
    }
  }

  ngOnInit(): void {
    this.fetchEmployees();
    this.getProject();
  }
}
