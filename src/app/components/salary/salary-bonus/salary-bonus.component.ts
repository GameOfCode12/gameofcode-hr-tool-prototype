import { Component, OnInit } from '@angular/core';
import { SalaryBonus } from 'src/app/models/salaryBonus.model';
import { SalaryBonusService } from 'src/app/services/salary-bonus/salary-bonus.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActionDialogComponent } from 'src/app/components/action-dialog/action-dialog.component';
import { EditSalaryBonusComponent } from './edit-salary-bonus/edit-salary-bonus.component';
import { AddSalaryBonusComponent } from './add-salary-bonus/add-salary-bonus.component';
import * as SalaryBonusesActions from '../../../actions/salary-bonuses.actions';
import { Store } from '@ngrx/store';
import { EmployeesState } from 'src/app/states/employees.state';
@Component({
  selector: 'app-salary-bonus',
  templateUrl: './salary-bonus.component.html',
  styleUrls: ['./salary-bonus.component.css'],
})
export class SalaryBonusComponent implements OnInit {
  salaryBonusDataSource: MatTableDataSource<SalaryBonus>;

  salaryBonusColumns = [
    'firstName',
    'lastName',
    'title',
    'joinedDate',
    'yearsInCa',
    'salary',
    'bonusType',
    'netBonus',
    'amtInDollar',
    'action',
  ];

  constructor(private store: Store<EmployeesState>, private dialog: MatDialog) {}

  getSalaryBonuses(): void {
    this.store.dispatch(new SalaryBonusesActions.GetSalaryBonuses());
    this.store.select('salaryBonuses').subscribe((response: any) => {
      if (response?.salaryBonuses) {
        this.salaryBonusDataSource = new MatTableDataSource(response.salaryBonuses);
      }
    });
  }

  addSalaryBonus() {
    const dialogOptions = new MatDialogConfig();
    dialogOptions.disableClose = true;
    dialogOptions.width = '1000px';
    dialogOptions.data = { parent: this };

    const dialogRef = this.dialog.open(AddSalaryBonusComponent, dialogOptions);

    dialogRef.afterClosed().subscribe((data) => {
      if (!data) {
        // if cancel button was clicked
        dialogRef.close();
        return;
      }
      const newSalaryBonus: SalaryBonus = {
        id: data.id,
        employee: data.employee.id,
        salary: data.employee.salary.id,
        bonusType: data.bonusType,
        netBonus: data.netBonus,
        amtInDollar: data.amtInDollar,
      };
      this.store.dispatch(new SalaryBonusesActions.AddSalaryBonus(newSalaryBonus));
    });
  }

  editSalaryBonus(salaryBonus: SalaryBonus) {
    const dialogOptions = new MatDialogConfig();
    dialogOptions.disableClose = true;
    dialogOptions.width = '1000px';
    dialogOptions.data = { salaryBonus: salaryBonus, parent: this };

    const dialogRef = this.dialog.open(EditSalaryBonusComponent, dialogOptions);

    dialogRef.afterClosed().subscribe((data) => {
      if (!data) {
        // if nothing was edited
        dialogRef.close();
        return;
      }
      const updatedSalaryBonus: Partial<SalaryBonus> = {
        id: salaryBonus.id,
        employee: data.employee.id,
        bonusType: data.bonusType,
        netBonus: data.netBonus,
        amtInDollar: data.amtInDollar,
      };
      this.store.dispatch(new SalaryBonusesActions.UpdateSalaryBonus(updatedSalaryBonus));
    });
  }

  deleteSalaryBonus(salaryBonus: SalaryBonus): void {
    const deleteActionDialogConfig = new MatDialogConfig();
    deleteActionDialogConfig.disableClose = true;
    deleteActionDialogConfig.width = '600px';
    deleteActionDialogConfig.data = {
      status: '',
      action: 'delete',
      item: 'bonus',
    };

    const dialogActionRef = this.dialog.open(ActionDialogComponent, deleteActionDialogConfig);

    dialogActionRef.afterClosed().subscribe((status) => {
      if (status === 'yes') {
        this.store.dispatch(new SalaryBonusesActions.DeleteSalaryBonus(salaryBonus));
      }
    });
  }

  ngOnInit(): void {
    this.getSalaryBonuses();
  }
}
