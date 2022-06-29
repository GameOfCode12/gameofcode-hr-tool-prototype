import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { HolidayService } from 'src/app/services/holiday/holiday.service';

@Component({
  selector: 'app-edit-non-working-holiday',
  templateUrl: './edit-non-working-holiday.component.html',
  styleUrls: ['./edit-non-working-holiday.component.css'],
})
export class EditNonWorkingHolidayComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditNonWorkingHolidayComponent>,
    private holidayService: HolidayService,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  editNonWorkingHolidayForm = this.formBuilder.group({
    name: ['', Validators.required],
    dateCelebrated: ['', Validators.required],
    nonWorkingDayDate: ['', Validators.required],
  });

  private getHoliday(): void {
    this.holidayService.getNonWorkingHoliday(this.data.holidayId).subscribe((holiday) => {
      this.editNonWorkingHolidayForm.patchValue({
        name: holiday.name,
        dateCelebrated: holiday.dateCelebrated,
        nonWorkingDayDate: holiday.nonWorkingDayDate,
      });
    });
  }

  closeEditNonWorkingHolidayDialog(): void {
    this.dialogRef.close();
  }

  editNonWorkingHoliday(): void {
    this.dialogRef.close(this.editNonWorkingHolidayForm.value);
  }

  ngOnInit(): void {
    this.getHoliday();
  }
}
