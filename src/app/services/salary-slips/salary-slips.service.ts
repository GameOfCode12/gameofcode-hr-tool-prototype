import { NotificationService } from './../notification/notification.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SalarySlipsService {
  private uploadURL = `${environment.api_url}/upload`;
  private slipURL = `${environment.api_url}/salary-slips`;

  constructor(private http: HttpClient, private notificationService: NotificationService) {}

  uploadSalarySlips(files: File[], date: Date) {
    const payload = new FormData();

    files.forEach((file) => {
      payload.append('files', file);
    });

    this.http.post(this.uploadURL, payload).subscribe(
      (res) => {
        this.http.post(this.slipURL, { files: res, date }).subscribe(
          (_) => this.notificationService.showSuccess('Slips uploaded!'),
          (err) => this.notificationService.showError('An error has occured. 26')
        );
      },
      (err) => this.notificationService.showError('An error has occured. 29')
    );
  }
}
