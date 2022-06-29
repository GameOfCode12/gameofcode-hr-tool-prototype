import { Component, OnInit } from '@angular/core';
import { Salary } from 'src/app/models/salary.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ViewSalaryCommentComponent } from './view-salary-comment/view-salary-comment.component';
import { EditSalaryComponent } from './edit-salary/edit-salary.component';
import * as SalariesActions from '../../actions/salaries.actions';
import { Store } from '@ngrx/store';
import { EmployeesState } from 'src/app/states/employees.state';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css'],
})
export class SalaryComponent implements OnInit {
  salaryDataSource: MatTableDataSource<Salary>;
  suggestedRaisesDataSource: MatTableDataSource<Salary>;
  suggestedRaises = [];

  salaryTableColumns: string[] = [
    'firstName',
    'lastName',
    'title',
    'yearsInCa',
    'contractExpiry',
    'lastRaise',
    'salary',
    'suggestedRaise',
    'final',
    'amtInDollar',
    'comments',
    'action',
  ];

  suggestedRaisesTableColumns: string[] = ['firstName', 'lastName', 'lastRaise', 'salary', 'suggestedRaise', 'action'];

  constructor(private store: Store<EmployeesState>, private dialog: MatDialog) {}

  getSalaries(): void {
    this.store.dispatch(new SalariesActions.GetSalaries());
    this.store.select('salaries').subscribe((response: any) => {
      if (response?.salaries) {
        this.salaryDataSource = new MatTableDataSource(response.salaries);
        response.salaries.forEach((sal) => {
          if (sal.suggestedRaise !== null) {
            this.suggestedRaises.push(sal);
          }
        });
        this.suggestedRaisesDataSource = new MatTableDataSource(this.suggestedRaises);
      }
    });
  }

  editSalary(salary: Salary) {
    const dialogOptions = new MatDialogConfig();
    dialogOptions.disableClose = true;
    dialogOptions.width = '1000px';
    dialogOptions.data = { salary: salary, parent: this };

    const dialogRef = this.dialog.open(EditSalaryComponent, dialogOptions);

    dialogRef.afterClosed().subscribe((data) => {
      if (!data) {
        // if nothing was edited
        dialogRef.close();
        return;
      }

      const editedSalary: Salary = {
        id: salary.id,
        employee: data.employee,
        contractExpiry: data.contractExpiry,
        lastContractLength: data.lastContractLength,
        suggestedNewContractLength: data.suggestedNewContractLength,
        salaryBumpHistory: data.salaryBumpHistory,
        lastRaiseDate: data.lastRaiseDate,
        lastRaise: data.lastRaise,
        salary: data.salary,
        suggestedRaise: data.suggestedRaise,
        final: data.final,
        amtInDollar: data.amtInDollar,
        comments: data.comments,
      };

      this.store.dispatch(new SalariesActions.UpdateSalary(editedSalary));
    });
  }

  filterByName(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.salaryDataSource.filterPredicate = (data: Salary, filterValue: string) => {
      return (
        (data.employee.firstName + data.employee.lastName)
          .replace(/ /g, '')
          .toLowerCase()
          .indexOf(filterValue.replace(/ /g, '').toLowerCase()) >= 0
      );
    };
    this.salaryDataSource.filter = filterValue;
  }

  approveRaise(salary: Salary) {
    salary = { ...salary, lastRaise: salary.suggestedRaise, lastRaiseDate: new Date(), suggestedRaise: null };
    this.store.dispatch(new SalariesActions.UpdateSalary(salary));
  }

  declineRaise(salary: Salary) {
    salary = { ...salary, suggestedRaise: null };
    this.store.dispatch(new SalariesActions.UpdateSalary(salary));
  }

  viewSalaryComments(salary: Salary) {
    const dialogOptions = new MatDialogConfig();
    dialogOptions.disableClose = true;
    dialogOptions.width = '500px';
    dialogOptions.data = { salary: salary, parent: this };
    this.dialog.open(ViewSalaryCommentComponent, dialogOptions);
  }

  ngOnInit(): void {
    this.getSalaries();
  }
}
