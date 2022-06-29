import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Employee } from '../../models/employee.model';
import { Role } from 'src/app/models/role.model';
import { Project } from 'src/app/models/project.model';
import { EmployeesState } from 'src/app/states/employees.state';
import { Store } from '@ngrx/store';
import * as EmployeesActions from '../../actions/employees.actions';
import * as ProjectsActions from '../../actions/projects.actions';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { DatePipe } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-employer',
  templateUrl: './add-employer.component.html',
  styleUrls: ['./add-employer.component.css'],
})
export class AddEmployerComponent implements OnInit {
  roles: Role[] = [];
  employees: Employee[] = [];
  projects: Project[] = [];
  selectedProjects: Project[] = [];
  managers: Employee[] = [];
  projectsForm = new FormControl();
  bonusTypes = ['Full + extra', 'Full', 'Half', 'Quarter', 'None'];

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddEmployerComponent>,
    private employeeService: EmployeeService,
    private datePipe: DatePipe,
    private location: Location,
    private store: Store<EmployeesState>
  ) {}

  addEmployeeForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    title: ['', Validators.required],
    manager: [''],
    phoneNumber: ['', Validators.required],
    emergencyContact: this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      relationship: ['', Validators.required],
    }),
    birthday: [''],
    joinedDate: ['', Validators.required],
    salary: ['', Validators.required],
    email: [
      '',
      Validators.compose([
        Validators.email,
        Validators.required,
        Validators.pattern('^([a-z])+@capeannenterprises.com$'),
      ]),
    ],
    lastBonusReceived: [''],
    user: this.formBuilder.group({
      username: ['', Validators.required],
      email: [
        '',
        Validators.compose([
          Validators.email,
          Validators.required,
          Validators.pattern('^([a-z])+@capeannenterprises.com$'),
        ]),
      ],
      password: ['', Validators.required],
      role: ['', Validators.required],
    }),
    projects: [''],
    domain: [''],
    generalRank: [''],
    dateLeft: null,
  });

  /** Submit add employer form data to service  */
  addEmployer(): void {
    let newEmployee = this.addEmployeeForm.value;
    this.addEmployeeForm.value.birthday = this.datePipe.transform(this.addEmployeeForm.value.birthday, 'yyyy-MM-dd'); // required field
    this.addEmployeeForm.value.joinedDate = this.datePipe.transform(
      this.addEmployeeForm.value.joinedDate,
      'yyyy-MM-dd'
    );

    newEmployee.salary = {
      salary: Number(this.addEmployeeForm.controls.salary.value),
      salaryBumpHistory: null,
      suggestedNewContractLength: null,
      suggestedRaise: null,
      lastRaise: null,
      lastRaiseDate: null,
      amtInDollar: null,
      final: Number(this.addEmployeeForm.controls.salary.value),
    };
    newEmployee.manager = this.addEmployeeForm.controls.manager.value;
    newEmployee.lastBonusReceived = this.addEmployeeForm.controls.lastBonusReceived.value;
    newEmployee.yearsInCA = this.countYearsInCA(newEmployee.joinedDate);
    this.employeeService.addEmployer(newEmployee).subscribe(() => {
      this.dialogRef.close(newEmployee);
    });
  }

  countYearsInCA(joinedDate: Date) {
    let currentDate = new Date();
    joinedDate = new Date(joinedDate);

    var time = currentDate.getTime() - joinedDate.getTime();
    var days = time / (1000 * 3600 * 24); // diference in days

    let diff = days / 365;
    diff = Math.round(diff * 100) / 100; // round to 2 decimal places

    return diff;
  }

  /** Retrive list of roles in add employer form  */
  private getRoles(): void {
    this.store.dispatch(new EmployeesActions.GetRoles());
    this.store.select('employees').subscribe((response: any) => {
      if (response?.roles) {
        this.roles = response.roles.roles;
      }
    });
  }

  /** Retrieve list of projects in add employer form */
  private getProjects(): void {
    this.store.dispatch(new ProjectsActions.GetProjects());
    this.store.select('projects').subscribe((response: any) => {
      if (response?.projects) {
        this.projects = response.projects;
      }
    });
  }

  private getManagers(): void {
    this.store.dispatch(new EmployeesActions.GetEmployees());
    this.store.select('employees').subscribe((response: any) => {
      if (response?.employees) {
        response.employees.forEach((employee) => {
          if (employee.title === 'Manager') {
            // prevent adding duplicates
            if (!this.managers.includes(employee)) {
              this.managers.push(employee);
            }
          }
        });
      }
    });
  }

  getSelectedProjects(event: { isUserInput: any; source: { value: any; selected: any } }) {
    if (event.isUserInput) {
      if (event.source.selected === true) {
        // this.selectedProjects.push(event.source.value);
        this.addEmployeeForm.controls.projects.setValue([
          ...this.addEmployeeForm.controls.projects.value,
          event.source.value.id,
        ]);
      }
    }
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getRoles();
    this.getProjects();
    this.getManagers();
  }
}
