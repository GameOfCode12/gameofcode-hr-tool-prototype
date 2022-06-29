import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-non-working-holiday',
  templateUrl: './add-non-working-holiday.component.html',
  styleUrls: ['./add-non-working-holiday.component.css'],
})
export class AddNonWorkingHolidayComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddNonWorkingHolidayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  addNonWorkingHolidayForm = this.formBuilder.group({
    name: ['', Validators.required],
    dateCelebrated: ['', Validators.required],
    nonWorkingDayDate: ['', Validators.required],
  });

  closeAddNonWorkingHolidayDialog(): void {
    this.dialogRef.close();
  }

  addNonWorkingHoliday(): void {
    this.dialogRef.close(this.addNonWorkingHolidayForm.value);
  }

  ngOnInit(): void {}
}
