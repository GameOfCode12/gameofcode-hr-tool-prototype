import { SalarySlipsService } from './../../services/salary-slips/salary-slips.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { NotificationService } from '../../services/notification/notification.service';

@Component({
  selector: 'app-salary-slips',
  templateUrl: './salary-slips.component.html',
  styleUrls: ['./salary-slips.component.css'],
})
export class SalarySlipsComponent implements OnInit {
  public multiple = true;
  public inputGroup: FormGroup;
  public fileControl: FormControl;
  public files = [];

  constructor(
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private salarySlipsService: SalarySlipsService
  ) {
    this.fileControl = new FormControl(this, [Validators.required]);

    this.inputGroup = this.formBuilder.group({
      slipDate: ['', Validators.required],
    });
  }

  public handleSubmit() {
    console.log('this.files', this.files);
    if (this.files.length === 0) {
      this.notificationService.showError('No files selected.');
    } else if (this.inputGroup.get('slipDate').hasError('required')) {
      this.notificationService.showError('No date selected.');
    } else {
      const date = new Date(this.inputGroup.get('slipDate').value);
      this.salarySlipsService.uploadSalarySlips(this.files, date);
    }
  }

  ngOnInit(): void {
    this.fileControl.valueChanges.subscribe((files: any) => {
      if (!Array.isArray(files)) {
        this.files = [files];
      } else {
        this.files = files;
      }
    });
  }
}
