import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Employee } from '../../models/employee.model';
import { Role } from '../../models/role.model';
import { Project } from '../../models/project.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { EmployeesState } from 'src/app/states/employees.state';
import * as EmployeesActions from '../../actions/employees.actions';
import * as ProjectsActions from '../../actions/projects.actions';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeesComponent } from '../employees/employees.component';
import { EmployeeService } from 'src/app/services/employee/employee.service';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  roles: Role[] = [];
  projects: Project[] = [];
  selectedProjects: Project[] = [];
  managers: Employee[] = [];
  employee: Employee;

  projectsForm = new FormControl();

  /* skillGroups = [
    { id: 1, name: 'Frontend' },
    { id: 2, name: 'Backend' },
    { id: 3, name: 'Fullstack' },
    { id: 4, name: 'Designer' },
    { id: 5, name: 'Quality Assurance' },
  ];*/
  bonusTypes = ['Full + extra', 'Full', 'Half', 'Quarter', 'None'];

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private store: Store<EmployeesState>,
    public dialogRef: MatDialogRef<EditEmployeeComponent>,
    private employeeService: EmployeeService,
    private datePipe: DatePipe,
    @Inject(MAT_DIALOG_DATA)
    public data: { employee: Employee; parent: EmployeesComponent }
  ) {}

  editEmployeeForm = this.formBuilder.group({
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
    email: ['', Validators.compose([Validators.email, Validators.required])],
    lastBonusReceived: [''],
    dateLeft: null,
    user: this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: [''],
      role: ['', Validators.required],
    }),
    projects: [''],
    domain: [''],
    generalRank: [''],
  });

  /** Update employer form data to service */
  updateEmployee(): void {
    const updatedEmployee: Employee = this.editEmployeeForm.value;
    updatedEmployee.id = this.data.employee.id;

    this.editEmployeeForm.value.birthday = this.datePipe.transform(this.editEmployeeForm.value.birthday, 'yyyy-MM-dd'); // required field
    this.editEmployeeForm.value.joinedDate = this.datePipe.transform(
      this.editEmployeeForm.value.joinedDate,
      'yyyy-MM-dd'
    );

    updatedEmployee.salary = {
      salary: Number(this.editEmployeeForm.controls.salary.value),
      salaryBumpHistory: this.employee.salary.salaryBumpHistory,
      suggestedNewContractLength: this.employee.salary.suggestedNewContractLength,
      suggestedRaise: this.employee.salary.suggestedRaise,
      lastRaise: this.employee.salary.lastRaise,
      lastRaiseDate: this.employee.salary.lastRaiseDate,
      amtInDollar: this.employee.salary.amtInDollar,
      final: Number(this.editEmployeeForm.controls.salary.value),
    };
    // count new yearsInCA only if the joinedDate field has been updated
    if (this.data.employee.joinedDate !== updatedEmployee.joinedDate) {
      updatedEmployee.yearsInCA = this.countYearsInCA(updatedEmployee.joinedDate);
    }
    this.employeeService.updateEmployee(updatedEmployee).subscribe(() => {
      this.dialogRef.close(updatedEmployee);
    });
  }

  countYearsInCA(joinedDate: Date) {
    const date = new Date();
    const yearNow = date.getFullYear();
    const monthNow = date.getMonth();
    const dayNow = date.getDate();

    joinedDate = new Date(joinedDate);
    const yearJoined = joinedDate.getFullYear();
    const monthJoined = joinedDate.getMonth();
    const dayJoined = joinedDate.getDate();

    let diff = yearNow - yearJoined;
    if (monthJoined > monthNow) --diff;
    else {
      if (monthJoined === monthNow) {
        if (dayJoined > dayNow) --diff;
      }
    }
    return diff;
  }

  /** Retrive list of roles in edit employer form  */
  private getRoles(): void {
    this.store.dispatch(new EmployeesActions.GetRoles());
    this.store.select('employees').subscribe((response: any) => {
      if (response?.roles) {
        this.roles = response.roles.roles;
      }
    });
  }

  /** Retrieve list of projects in edit employee form */
  private getProjects(): void {
    this.store.dispatch(new ProjectsActions.GetProjects());
    this.store.select('projects').subscribe((response: any) => {
      if (response?.projects) this.projects = response.projects;
    });
  }

  /** Get Employee data and update form with data */
  private getEmployee(): void {
    this.employee = this.data.employee;
    const managerId = this.employee.manager !== null ? this.employee.manager.id : null;
    const emergencyContactFirstName =
      this.employee.emergency_contact !== null ? this.employee.emergency_contact.firstName : '';
    const emergencyContactLastName =
      this.employee.emergency_contact !== null ? this.employee.emergency_contact.lastName : '';
    const emergencyContactPhoneNumber =
      this.employee.emergency_contact !== null ? this.employee.emergency_contact.phoneNumber : '';
    const emergencyContactRelationship =
      this.employee.emergency_contact !== null ? this.employee.emergency_contact.relationship : '';
    const userUsername = this.employee.user !== null ? this.employee.user.username : '';
    const userEmail = this.employee.user !== null ? this.employee.user.email : '';
    const userRole = this.employee.user !== null ? this.employee.user.role.toString() : '';
    this.editEmployeeForm.patchValue({
      firstName: this.employee.firstName,
      lastName: this.employee.lastName,
      title: this.employee.title,
      manager: managerId,
      phoneNumber: this.employee.phoneNumber,
      dateLeft: this.employee.dateLeft,
      emergencyContact: {
        firstName: emergencyContactFirstName,
        lastName: emergencyContactLastName,
        phoneNumber: emergencyContactPhoneNumber,
        relationship: emergencyContactRelationship,
      },
      birthday: this.employee.birthday,
      joinedDate: this.employee.joinedDate,
      salary: this.employee.salary.salary,
      email: this.employee.email,
      lastBonusReceived: this.employee.lastBonusReceived,
      generalRank: this.employee.generalRank,
      user: {
        username: userUsername,
        email: userEmail,
        role: userRole,
      },
      projects: this.employee.projects,
      domain: this.employee.domain,
      skillGroup: this.employee.skillGroup,
    });
  }

  public checkProjects(project: Project) {
    var res = this.projects.includes(project);
    if (res) {
      return 'true';
    } else {
      return 'false';
    }
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
  private selectExistingProjects() {
    const options = Array.from(document.getElementsByClassName('project-option'));

    for (let i = 0; i < options.length; i++) {
      const option = options[i];
      const result = this.employee.projects.find(
        (project) => project.name.toLowerCase().trim() === option.textContent.toLowerCase().trim()
      );

      if (result) {
        option.setAttribute('selected', 'true');
      } else {
        option.removeAttribute('selected');
      }
    }
  }
  ngOnInit() {
    this.getEmployee();
    this.getManagers();
    this.getProjects();
    this.getRoles();
  }

  ngAfterContentChecked() {
    this.selectExistingProjects();
  }
}
