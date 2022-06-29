import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';
import { SalaryBonus } from 'src/app/models/salaryBonus.model';
import { SalaryBonusComponent } from '../salary-bonus.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeesState } from 'src/app/states/employees.state';
import { Store } from '@ngrx/store';
import * as EmployeesActions from '../../../../actions/employees.actions';
@Component({
  selector: 'app-edit-salary-bonus',
  templateUrl: './edit-salary-bonus.component.html',
  styleUrls: ['./edit-salary-bonus.component.css'],
})
export class EditSalaryBonusComponent implements OnInit {
  employees: Employee[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditSalaryBonusComponent>,
    private store: Store<EmployeesState>,
    @Inject(MAT_DIALOG_DATA)
    public data: { salaryBonus: SalaryBonus; parent: SalaryBonusComponent }
  ) {}

  selectedEmployee: Employee;
  salaryBonus: SalaryBonus;
  bonusTypes = ['Full + extra', 'Full', 'Half', 'Quarter', 'None'];

  editSalaryBonusForm: FormGroup = this.formBuilder.group({
    employee: ['', Validators.required],
    bonusType: ['', Validators.required],
    netBonus: ['', Validators.required],
    amtInDollar: ['', Validators.required],
  });

  private getSalaryBonus(): void {
    this.editSalaryBonusForm.patchValue({
      employee: this.data.salaryBonus.employee.id.toString(),
      bonusType: this.data.salaryBonus.bonusType,
      netBonus: this.data.salaryBonus.netBonus,
      amtInDollar: this.data.salaryBonus.amtInDollar,
    });
  }

  private getEmployees(): void {
    this.store.dispatch(new EmployeesActions.GetEmployees());
    this.store.select('employees').subscribe((response: any) => {
      if (response?.employees) {
        this.employees = response.employees;
        this.selectedEmployee = this.employees.find((el) => el.id === this.data.salaryBonus.employee.id);
      }
    });
  }

  editSalaryBonus(): void {
    this.dialogRef.close(this.editSalaryBonusForm.value);
  }

  onChangeEmployee(event: HTMLSelectElement) {
    const employeeId = parseInt(event.value);
    this.selectedEmployee = this.employees.find((el) => el.id === employeeId);
    this.onChangeBonusSetNetBonus(); // if user chooses another employee AFTER setting bonus type
  }

  onChangeBonusSetNetBonus() {
    const bonusType = this.editSalaryBonusForm.controls.bonusType.value;
    if (!bonusType) return; // if employee is set in form but bonus type isn't
    this.salaryBonus = new SalaryBonus();
    if (
      this.selectedEmployee !== undefined &&
      this.selectedEmployee.salary !== null &&
      this.selectedEmployee.salary.salary !== null
    ) {
      // set bonus only if employee has salary
      switch (bonusType) {
        case 'Full + extra':
          this.salaryBonus.netBonus = this.selectedEmployee.salary.salary * 1.5;
          break;
        case 'Full':
          this.salaryBonus.netBonus = this.selectedEmployee.salary.salary;
          break;
        case 'Half':
          this.salaryBonus.netBonus = this.selectedEmployee.salary.salary / 2;
          break;
        case 'Quarter':
          this.salaryBonus.netBonus = this.selectedEmployee.salary.salary / 4;
          break;
        case 'None':
          this.salaryBonus.netBonus = 0;
          break;
      }
      this.editSalaryBonusForm.patchValue({
        netBonus: this.salaryBonus.netBonus,
      });
      this.setNetDollarValue();
    }
  }

  setNetDollarValue(): void {
    let amtInDollar = (this.editSalaryBonusForm.value.netBonus * 0.51).toFixed(2);
    this.salaryBonus.amtInDollar = Number(amtInDollar);
    this.editSalaryBonusForm.patchValue({
      amtInDollar: amtInDollar,
    });
  }

  ngOnInit(): void {
    this.getEmployees();
    this.getSalaryBonus();
  }
}
