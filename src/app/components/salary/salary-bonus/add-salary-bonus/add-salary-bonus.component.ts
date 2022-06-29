import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';
import { SalaryBonus } from 'src/app/models/salaryBonus.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SalaryBonusComponent } from '../salary-bonus.component';
import { EmployeesState } from 'src/app/states/employees.state';
import { Store } from '@ngrx/store';
import * as EmployeesActions from '../../../../actions/employees.actions';

@Component({
  selector: 'app-add-salary-bonus',
  templateUrl: './add-salary-bonus.component.html',
  styleUrls: ['./add-salary-bonus.component.css'],
})
export class AddSalaryBonusComponent implements OnInit {
  employees: Employee[] = [];
  selectedEmployee: Employee;
  salaryBonus = new SalaryBonus();

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddSalaryBonusComponent>,
    private store: Store<EmployeesState>,
    @Inject(MAT_DIALOG_DATA)
    public data: { parent: SalaryBonusComponent }
  ) {}

  bonusTypes = ['Full + extra', 'Full', 'Half', 'Quarter', 'None'];

  addSalaryBonusForm: FormGroup = this.formBuilder.group({
    employee: ['', Validators.required],
    bonusType: ['', Validators.required],
    netBonus: ['', Validators.required],
    amtInDollar: ['', Validators.required],
  });

  private getEmployees(): void {
    this.store.dispatch(new EmployeesActions.GetEmployees());
    this.store.select('employees').subscribe((response: any) => {
      if (response?.employees) {
        this.employees = response.employees;
      }
    });
  }

  addSalaryBonus(): void {
    this.salaryBonus = this.addSalaryBonusForm.value;
    this.salaryBonus.employee = this.selectedEmployee;
    this.salaryBonus.bonusType = this.addSalaryBonusForm.controls.bonusType.value;
    delete this.salaryBonus.id;
    this.dialogRef.close(this.addSalaryBonusForm.value);
  }

  onChangeEmployee(event: HTMLSelectElement) {
    const employeeId = parseInt(event.value);
    this.selectedEmployee = this.employees.find((el) => el.id === employeeId);
    this.onChangeBonusSetNetBonus(); // if user chooses another employee AFTER setting bonus type
  }

  onChangeBonusSetNetBonus() {
    const bonusType = this.addSalaryBonusForm.controls.bonusType.value;
    if (!bonusType) return; // if employee is set in form but bonus type isn't
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
      this.addSalaryBonusForm.patchValue({
        netBonus: this.salaryBonus.netBonus,
      });
      this.setNetDollarValue();
    }
  }

  setNetDollarValue(): void {
    let amtInDollar = (this.addSalaryBonusForm.value.netBonus * 0.51).toFixed(2);
    this.salaryBonus.amtInDollar = Number(amtInDollar);
    this.addSalaryBonusForm.patchValue({
      amtInDollar: amtInDollar,
    });
  }

  ngOnInit(): void {
    this.getEmployees();
  }
}
