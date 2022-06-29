import { NonWorkingHoliday } from './../../models/nonWorkingHoliday.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddNonWorkingHolidayComponent } from '../add-non-working-holiday/add-non-working-holiday.component';
import excelExport from '../../utils/excelExport';
import { EditNonWorkingHolidayComponent } from '../edit-non-working-holiday/edit-non-working-holiday.component';
import { ActionDialogComponent } from 'src/app/components/action-dialog/action-dialog.component';
import { EmployeesState } from 'src/app/states/employees.state';
import { Store } from '@ngrx/store';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { DatePipe } from '@angular/common';
import * as NonWorkingHolidaysActions from '../../actions/non-working-holidays.actions';
@Component({
  selector: 'app-non-working-holidays',
  templateUrl: './non-working-holidays.component.html',
  styleUrls: ['./non-working-holidays.component.css'],
  providers: [DatePipe],
})
export class NonWorkingHolidaysComponent implements OnInit {
  public nonWorkingHolidays: NonWorkingHoliday[];
  public columns = ['name', 'dateCelebrated', 'nonWorkingDayDate', 'action'];

  constructor(
    private dialog: MatDialog,
    private store: Store<EmployeesState>,
    private datePipe: DatePipe,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.fetchNonWorkingHolidays();
  }
  private fetchNonWorkingHolidays() {
    this.store.dispatch(new NonWorkingHolidaysActions.GetNonWorkingHolidays());
    this.store.select('nonWorkingHolidays').subscribe((response: any) => {
      if (response?.nonWorkingHolidays) this.nonWorkingHolidays = response.nonWorkingHolidays;
    });
  }

  public exportNonWorkingHolidayList() {
    const nonWorkingHolidaysList = this.nonWorkingHolidays.map(({ name, dateCelebrated, nonWorkingDayDate }) => ({
      'Holiday Name': name,
      'Date Celebrated': dateCelebrated,
      'Non-working Day Date': nonWorkingDayDate,
    }));

    excelExport(nonWorkingHolidaysList, 'CANonWorkingHolidayList');
  }

  public addHoliday() {
    const dialogOptions = new MatDialogConfig();
    dialogOptions.disableClose = true;
    dialogOptions.width = '700px';
    dialogOptions.data = {};
    let holidays: NonWorkingHoliday;
    const dialogRef = this.dialog.open(AddNonWorkingHolidayComponent, dialogOptions);

    dialogRef.afterClosed().subscribe((data) => {
      if (!data) {
        // if nothing was added
        dialogRef.close();
        return;
      }
      const holiday: NonWorkingHoliday = {
        name: data.name,
        dateCelebrated: new Date(data.dateCelebrated),
        nonWorkingDayDate: new Date(data.nonWorkingDayDate),
      };
      let transformedHolidayDate = this.datePipe.transform(holiday.dateCelebrated, 'yyyy-MM-dd');
      this.nonWorkingHolidays.every((e) => {
        let transformedNonWorkingHolidaysDate = this.datePipe.transform(e.dateCelebrated, 'yyyy-MM-dd');
        if (transformedHolidayDate == transformedNonWorkingHolidaysDate) {
          this.notificationService.showError('You have events on same date');
          return false;
        } else {
          this.notificationService.showSuccess('Non working holiday added');
          this.store.dispatch(new NonWorkingHolidaysActions.AddNonWorkingHoliday(holiday));
          return true;
        }
      });
    });
  }

  public editHoliday(holiday: NonWorkingHoliday) {
    const dialogOptions = new MatDialogConfig();
    dialogOptions.disableClose = true;
    dialogOptions.width = '700px';
    dialogOptions.data = { holidayId: holiday.id };

    const dialogRef = this.dialog.open(EditNonWorkingHolidayComponent, dialogOptions);

    dialogRef.afterClosed().subscribe((data) => {
      if (!data) {
        // if nothing was edited
        dialogRef.close();
        return;
      }
      const updatedHoliday: NonWorkingHoliday = {
        name: data.name,
        dateCelebrated: new Date(data.dateCelebrated),
        nonWorkingDayDate: new Date(data.nonWorkingDayDate),
        id: holiday.id,
      };

      this.store.dispatch(new NonWorkingHolidaysActions.UpdateNonWorkingHoliday(updatedHoliday));
    });
  }

  public deleteHoliday(holiday: NonWorkingHoliday) {
    const deleteActionDialogConfig = new MatDialogConfig();
    deleteActionDialogConfig.disableClose = true;
    deleteActionDialogConfig.width = '600px';
    deleteActionDialogConfig.data = {
      status: '',
      action: 'delete',
      item: 'non working holiday',
    };

    const dialogActionRef = this.dialog.open(ActionDialogComponent, deleteActionDialogConfig);

    dialogActionRef.afterClosed().subscribe((status) => {
      if (status === 'yes') {
        this.store.dispatch(new NonWorkingHolidaysActions.DeleteNonWorkingHoliday(holiday));
      }
    });
  }

  public printNonWorkingHolidays() {
    window.print();
  }
}
