import { NotificationService } from './../../services/notification/notification.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from './../../models/employee.model';
import { MatTableDataSource } from '@angular/material/table';
import { RoutePaths } from '../../route-paths.enum';
import excelExport from '../../utils/excelExport';
import { EmployeesState } from 'src/app/states/employees.state';
import { Store } from '@ngrx/store';
import * as EmployeesActions from '../../actions/employees.actions';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddEmployerComponent } from '../add-employer/add-employer.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employeeDataSource: MatTableDataSource<Employee>;
  employees: Employee[];
  routePaths: typeof RoutePaths;

  public employeesTableColumns = [
    'firstName',
    'lastName',
    'manager',
    'salary',
    'email',
    'lastBonusReceived',
    'yearsInCA',
    'action',
  ];

  constructor(
    private store: Store<EmployeesState>,
    private notifactionService: NotificationService,
    private dialog: MatDialog
  ) {}

  private fetchEmployees() {
    this.store.dispatch(new EmployeesActions.GetEmployees());
    this.store.select('employees').subscribe((response: any) => {
      if (response?.employees) {
        this.employees = response.employees;
        this.employeeDataSource = new MatTableDataSource(this.employees);
      }
    });
  }

  addEmployee() {
    const dialogOptions = new MatDialogConfig();
    dialogOptions.disableClose = false;
    dialogOptions.data = { parent: this };
    dialogOptions.maxWidth = '100vw';
    dialogOptions.maxHeight = '100vh';
    dialogOptions.height = '100%';
    dialogOptions.width = '100%';
    const dialogRef = this.dialog.open(AddEmployerComponent, dialogOptions);

    dialogRef.afterClosed().subscribe((data: Employee) => {
      if (!data) {
        // if cancel button was clicked
        dialogRef.close();
        return;
      }
      this.employees = [...this.employees, data];
      this.employeeDataSource = new MatTableDataSource(this.employees);
    });
  }

  editEmployee(employee: Employee) {
    const dialogOptions = new MatDialogConfig();
    dialogOptions.disableClose = false;
    dialogOptions.data = { parent: this };
    dialogOptions.maxWidth = '100vw';
    dialogOptions.maxHeight = '100vh';
    dialogOptions.height = '100%';
    dialogOptions.width = '100%';
    dialogOptions.data = { employee: employee, parent: this };

    const dialogRef = this.dialog.open(EditEmployeeComponent, dialogOptions);

    dialogRef.afterClosed().subscribe((data) => {
      if (!data) {
        // if nothing was edited
        dialogRef.close();
        return;
      }
      const index = this.employees.findIndex((employee) => employee.id === data.id);
      // this.employees is a part of state which makes it immutable so it has to be copied before editing
      let updatedEmployees = [...this.employees];
      updatedEmployees[index] = data;
      this.employees = updatedEmployees;
      this.employeeDataSource = new MatTableDataSource(this.employees);
    });
  }

  filterByName(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.employeeDataSource.filterPredicate = (data: Employee, filterValue: string) => {
      return (
        (data.firstName + data.lastName)
          .replace(/ /g, '')
          .toLowerCase()
          .indexOf(filterValue.replace(/ /g, '').toLowerCase()) >= 0
      );
    };
    this.employeeDataSource.filter = filterValue;
  }

  public exportMailingPhoneList(): void {
    const employeeExportList = this.employeeDataSource.data.map((employee) => {
      return {
        'First Name': employee.firstName,
        'Last Name': employee.lastName,
        Phone: employee.phoneNumber,
        Email: employee.email,
      };
    });

    excelExport(employeeExportList, 'CAMailingPhoneList');
  }

  ngOnInit(): void {
    this.fetchEmployees();
    this.routePaths = RoutePaths;

    // Do a check if the user has an employee
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user.employee)
      this.notifactionService.showError('You have no employee object assigned to you.\nContact an administrator.');
  }
}
