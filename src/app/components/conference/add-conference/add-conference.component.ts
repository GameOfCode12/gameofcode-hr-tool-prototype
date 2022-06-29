import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Employee } from 'src/app/models/employee.model';
import { RoutePaths } from 'src/app/route-paths.enum';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConferenceComponent } from '../conference.component';
import { Store } from '@ngrx/store';
import { EmployeesState } from 'src/app/states/employees.state';

@Component({
  selector: 'app-add-conference',
  templateUrl: './add-conference.component.html',
  styleUrls: ['./add-conference.component.css'],
})
export class AddConferenceComponent implements OnInit {
  employees: Employee[] = [];
  routePaths: typeof RoutePaths = RoutePaths;

  constructor(
    private store: Store<EmployeesState>,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddConferenceComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { parent: ConferenceComponent }
  ) {}

  conferenceTypes = ['Conference', 'Training', 'Udemy Course', 'Other Course'];

  addConferenceForm: FormGroup = this.formBuilder.group({
    employee: ['', Validators.required],
    conferenceType: ['', Validators.required],
    conferenceName: ['', Validators.required],
    dateAttended: [''],
    assignedBy: [''],
    certification: [''],
  });

  private getEmployees(): void {
    this.store.select('employees').subscribe((response: any) => {
      if (response?.employees) {
        this.employees = response.employees;
      }
    });
  }

  addConference(): void {
    this.dialogRef.close(this.addConferenceForm.value);
  }

  ngOnInit(): void {
    this.getEmployees();
  }
}
