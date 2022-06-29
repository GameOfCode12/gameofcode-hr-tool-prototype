import { Component, OnInit } from '@angular/core';
import { Conference } from 'src/app/models/conference.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActionDialogComponent } from 'src/app/components/action-dialog/action-dialog.component';
import { EditConferenceComponent } from './edit-conference/edit-conference.component';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { AddConferenceComponent } from './add-conference/add-conference.component';
import { Store } from '@ngrx/store';
import * as ConferencesActions from '../../actions/conferences.actions';
import { EmployeesState } from 'src/app/states/employees.state';
@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.css'],
})
export class ConferenceComponent implements OnInit {
  conferences: Conference[];
  filteredConferences: Conference[];
  conferenceColumns = [
    'firstName',
    'lastName',
    'conferenceType',
    'conferenceName',
    'dateAttended',
    'assignedBy',
    'certification',
    'action',
  ];

  constructor(
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private store: Store<EmployeesState>
  ) {}

  private getConferences(): void {
    this.store.dispatch(new ConferencesActions.GetConferences());

    this.store.select('conferences').subscribe((response: any) => {
      if (response?.conferences) {
        this.conferences = response.conferences;
        this.filteredConferences = this.conferences;
      }
    });
  }

  addConference() {
    const dialogOptions = new MatDialogConfig();
    dialogOptions.disableClose = true;
    dialogOptions.width = '1000px';
    dialogOptions.data = { parent: this };

    const dialogRef = this.dialog.open(AddConferenceComponent, dialogOptions);

    dialogRef.afterClosed().subscribe((data) => {
      if (!data) {
        // if cancel button was clicked
        dialogRef.close();
        return;
      }
      const newConference: Conference = {
        id: data.id,
        employee: data.employee,
        conferenceType: data.conferenceType,
        conferenceName: data.conferenceName,
        dateAttended: data.dateAttended,
        assignedBy: data.assignedBy,
        certification: data.certification,
      };

      this.store.dispatch(new ConferencesActions.AddConference(newConference));
    });
  }

  editConference(conference: Conference) {
    const dialogOptions = new MatDialogConfig();
    dialogOptions.disableClose = true;
    dialogOptions.width = '1000px';
    dialogOptions.data = { conference: conference, parent: this };

    const dialogRef = this.dialog.open(EditConferenceComponent, dialogOptions);

    dialogRef.afterClosed().subscribe((data) => {
      if (!data) {
        // if nothing was edited
        dialogRef.close();
        return;
      }

      const editedConference: Conference = {
        id: conference.id,
        employee: data.employee,
        conferenceType: data.conferenceType,
        conferenceName: data.conferenceName,
        dateAttended: data.dateAttended,
        assignedBy: data.assignedBy,
        certification: data.certification,
      };

      this.store.dispatch(new ConferencesActions.UpdateConference(editedConference));
    });
  }

  deleteConference(conference: Conference): void {
    const deleteActionDialogConfig = new MatDialogConfig();
    deleteActionDialogConfig.disableClose = true;
    deleteActionDialogConfig.width = '600px';
    deleteActionDialogConfig.data = {
      status: '',
      action: 'delete',
      item: 'conference',
    };

    const dialogActionRef = this.dialog.open(ActionDialogComponent, deleteActionDialogConfig);

    dialogActionRef.afterClosed().subscribe((status) => {
      if (status === 'yes') {
        this.store.dispatch(new ConferencesActions.DeleteConference(conference));
        this.notificationService.showSuccess(`${conference.conferenceName} deleted.`);
        (err) => this.notificationService.showError;
      }
    });
  }

  filterByName(input: String): void {
    const name = input.split(' ').join('').toLowerCase().trim();
    this.filteredConferences = this.conferences.filter((element) =>
      element.conferenceName.toLowerCase().includes(name)
    );
  }

  ngOnInit(): void {
    this.getConferences();
  }
}
