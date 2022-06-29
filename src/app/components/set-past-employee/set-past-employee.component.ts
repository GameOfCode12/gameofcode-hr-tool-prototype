import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-set-past-employee',
  templateUrl: './set-past-employee.component.html',
  styleUrls: ['./set-past-employee.component.css'],
})
export class SetPastEmployeeComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<SetPastEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  setPastEmployeeForm = this.formBuilder.group({
    dateLeft: ['', Validators.required],
  });

  setPastEmployee(): void {
    this.dialogRef.close(this.setPastEmployeeForm.value);
  }
  closeSetPastEmployeeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
