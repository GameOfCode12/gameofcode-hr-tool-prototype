import { Component, OnInit } from '@angular/core';
import { EmergencyContact } from './../../models/emergencyContact.model';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { EmployeesState } from 'src/app/states/employees.state';
import * as EmergencyContactsActions from '../../actions/emergency-contacts.actions';

@Component({
  selector: 'app-emergency-contacts',
  templateUrl: './emergency-contacts.component.html',
  styleUrls: ['./emergency-contacts.component.css'],
})
export class EmergencyContactsComponent implements OnInit {
  emergencyContactDataSource: MatTableDataSource<EmergencyContact>;

  public emergencyContactColumns = [
    'firstName',
    'lastName',
    'phoneNumber',
    'emergencyContactFirstName',
    'emergencyContactLastName',
    'emergencyContactPhoneNumber',
  ];

  constructor(private store: Store<EmployeesState>) {}

  private fetchEmergencyContacts(): void {
    this.store.dispatch(new EmergencyContactsActions.GetEmergencyContacts());
    this.store.select('emergencyContacts').subscribe((response: any) => {
      if (response?.emergencyContacts) {
        this.emergencyContactDataSource = new MatTableDataSource(response.emergencyContacts);
      }
    });
  }

  filterByName(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.emergencyContactDataSource.filterPredicate = (data: EmergencyContact, filterValue: string) => {
      return (
        (data.employee.firstName + data.employee.lastName)
          .replace(/ /g, '')
          .toLowerCase()
          .indexOf(filterValue.replace(/ /g, '').toLowerCase()) >= 0
      );
    };
    this.emergencyContactDataSource.filter = filterValue;
  }

  ngOnInit(): void {
    this.fetchEmergencyContacts();
  }
}
