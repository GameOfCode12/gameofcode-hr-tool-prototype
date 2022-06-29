import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { MatTableDataSource } from '@angular/material/table';
import { RoutePaths } from 'src/app/route-paths.enum';
import { Store } from '@ngrx/store';
import { EmployeesState } from 'src/app/states/employees.state';
import * as EmployeesActions from '../../actions/employees.actions';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';

@Component({
  selector: 'app-past-employees',
  templateUrl: './past-employees.component.html',
  styleUrls: ['./past-employees.component.css'],
})
export class PastEmployeesComponent implements OnInit {
  pastEmployeeDataSource: MatTableDataSource<Employee>;
  pastEmployees: Employee[];
  public pastEmployeesColumns = ['firstName', 'lastName', 'salary', 'projects', 'yearsInCA', 'dateLeft', 'action'];
  routePaths: typeof RoutePaths;

  constructor(private router: Router, private store: Store<EmployeesState>, private dialog: MatDialog) {}

  private fetchPastEmployees() {
    this.store.dispatch(new EmployeesActions.GetPastEmployees());
    this.store.select('employees').subscribe((response: any) => {
      if (response?.pastEmployees) {
        this.pastEmployees = response.pastEmployees;
        this.pastEmployeeDataSource = new MatTableDataSource(response.pastEmployees);
      }
    });
  }
  // openEmployeeDetails(employee: Employee) {
  // this.router.navigateByUrl('employee-details');
  //}
  goToEmployeeDetails(id: any) {
    this.router.navigate(['/employee-details', id]);
  }
  filterByName(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.pastEmployeeDataSource.filterPredicate = (data: Employee, filterValue: string) => {
      return (
        (data.firstName + data.lastName)
          .replace(/ /g, '')
          .toLowerCase()
          .indexOf(filterValue.replace(/ /g, '').toLowerCase()) >= 0
      );
    };
    this.pastEmployeeDataSource.filter = filterValue;
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
      const index = this.pastEmployees.findIndex((employee) => employee.id === data.id);
      // this.pastEmployees is a part of state which makes it immutable so it has to be copied before editing
      let updatedEmployees = [...this.pastEmployees];
      updatedEmployees[index] = data;
      this.pastEmployees = updatedEmployees;
      this.pastEmployeeDataSource = new MatTableDataSource(this.pastEmployees);
    });
  }

  ngOnInit(): void {
    this.fetchPastEmployees();
    this.routePaths = RoutePaths;
  }
}
