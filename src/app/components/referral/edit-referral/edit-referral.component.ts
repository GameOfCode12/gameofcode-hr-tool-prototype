import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ReferralService } from 'src/app/services/referral/referral.service';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-edit-referral',
  templateUrl: './edit-referral.component.html',
  styleUrls: ['./edit-referral.component.css']
})
export class EditReferralComponent implements OnInit {

  referralId: number = +this.route.snapshot.paramMap.get('id');
  employees: Employee[] = [];


  constructor(
    private referralService: ReferralService,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private location: Location
  ) {}

  editReferralForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    employeeReferralId: ['', Validators.required],
    trialEnds: ['', Validators.required],
    bonusPaid: [''],
    referralBonus: [''],
    note: ['']
  });

  getReferral(): void {
    this.referralService.getReferral(this.referralId).subscribe(
      referral => {
        this.editReferralForm.patchValue({
          firstName: referral.firstName,
          lastName: referral.lastName,
          employeeReferralId: referral.employeeReferralId.toString(),
          trialEnds: referral.trialEnds,
          bonusPaid: referral.bonusPaid.toString(),
          referralBonus: referral.referralBonus,
          note: referral.note
        });
      }
    );
  }
  private getEmployees() {
    this.employeeService.getEmployees().subscribe(
      employees => {
        this.employees = employees;
      }
    );
  }

  updateReferral(): void {
    this.referralService.updateReferral(this.editReferralForm.value, this.referralId).subscribe(
      referral => {
        this.location.back();
      }
    );

  }

  ngOnInit(): void {
    this.getReferral();
    this.getEmployees();
  }

}
