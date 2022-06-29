import { NotificationService } from './../../../services/notification/notification.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';
import { ReferralService } from 'src/app/services/referral/referral.service';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-add-referral',
  templateUrl: './add-referral.component.html',
  styleUrls: ['./add-referral.component.css'],
})
export class AddReferralComponent implements OnInit {
  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private referralService: ReferralService,
    private notificationService: NotificationService
  ) {}

  addReferralForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    employeeReferral: ['', Validators.required],
    trialEnds: ['', Validators.required],
    bonusPaid: [''],
    referralBonus: [''],
    note: [''],
  });

  addReferral(): void {
    this.referralService
      .createReferal(this.addReferralForm.value)
      .subscribe((referral) => this.notificationService.showSuccess('Referral Created!'));
  }
  private getEmployee(): void {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;
    });
  }
  ngOnInit(): void {
    this.getEmployee();
  }
}
