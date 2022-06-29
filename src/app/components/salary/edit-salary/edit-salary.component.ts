import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Salary } from 'src/app/models/salary.model';
import { SalaryService } from 'src/app/services/salary/salary.service';
import { SalaryComponent } from '../salary.component';

@Component({
  selector: 'app-edit-salary',
  templateUrl: './edit-salary.component.html',
  styleUrls: ['./edit-salary.component.css'],
})
export class EditSalaryComponent implements OnInit {
  constructor(
    private salaryService: SalaryService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditSalaryComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { salary: Salary; parent: SalaryComponent }
  ) {}

  editSalaryForm: FormGroup = this.formBuilder.group({
    contractExpiry: [''],
    lastContractLength: [''],
    suggestedNewContractLength: [''],
    salaryBumpHistory: [''],
    lastRaiseDate: [''],
    lastRaise: [''],
    salary: ['', Validators.required],
    suggestedRaise: [''],
    final: [''],
    amtInDollar: [''],
    comments: [''],
  });

  private getSalary(): void {
    const salary = this.data.salary;
    this.editSalaryForm.patchValue({
      contractExpiry: salary.contractExpiry,
      lastContractLength: salary.lastContractLength,
      suggestedNewContractLength: salary.suggestedNewContractLength,
      salaryBumpHistory: salary.salaryBumpHistory,
      lastRaiseDate: salary.lastRaiseDate,
      lastRaise: salary.lastRaise,
      salary: salary.salary,
      suggestedRaise: salary.suggestedRaise,
      final: salary.final,
      amtInDollar: salary.amtInDollar,
      comments: salary.comments,
    });
  }

  updateSalary(): void {
    this.dialogRef.close(this.editSalaryForm.value);
  }

  ngOnInit(): void {
    this.getSalary();
  }
}
