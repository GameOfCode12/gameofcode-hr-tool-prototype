import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';
import { ConferenceService } from 'src/app/services/conference/conference.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConferenceComponent } from '../conference.component';
import { Conference } from 'src/app/models/conference.model';
import { EmployeesState } from 'src/app/states/employees.state';
import { Store } from '@ngrx/store';
import * as EmployeesActions from '../../../actions/employees.actions';

@Component({
  selector: 'app-edit-conference',
  templateUrl: './edit-conference.component.html',
  styleUrls: ['./edit-conference.component.css'],
})
export class EditConferenceComponent implements OnInit {
  employees: Employee[] = [];

  selectedEmployee: String;
  selectedAssignedBy: String;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<EmployeesState>,
    public dialogRef: MatDialogRef<EditConferenceComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { conference: Conference; parent: ConferenceComponent }
  ) {}

  conferenceTypes = ['Conference', 'Training', 'Udemy Course', 'Other Course'];

  editConferenceForm: FormGroup = this.formBuilder.group({
    employee: ['', Validators.required],
    conferenceType: ['', Validators.required],
    conferenceName: ['', Validators.required],
    dateAttended: [''],
    assignedBy: [''],
    certification: [''],
  });

  private getConference(): void {
    let conference = this.data.conference;
    this.editConferenceForm.patchValue({
      employee: conference.employee.id,
      conferenceType: conference.conferenceType,
      conferenceName: conference.conferenceName,
      dateAttended: conference.dateAttended,
      assignedBy: conference.assignedBy.id,
      certification: conference.certification,
    });
  }

  private getEmployees(): void {
    this.store.dispatch(new EmployeesActions.GetEmployees());
    this.store.select('employees').subscribe((response: any) => {
      if (response?.employees) {
        this.employees = response.employees;
      }
    });
  }

  updateConference(): void {
    this.dialogRef.close(this.editConferenceForm.value);
  }

  ngOnInit(): void {
    this.getConference();
    this.getEmployees();
  }
}
