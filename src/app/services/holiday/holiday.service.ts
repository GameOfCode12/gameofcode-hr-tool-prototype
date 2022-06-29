import { NonWorkingHoliday } from './../../models/nonWorkingHoliday.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HolidayService {
  apiHolidaysUrl = `${environment.api_url}/non-working-holidays`;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  public getNonWorkingHolidays(): Observable<NonWorkingHoliday[]> {
    return this.http.get<NonWorkingHoliday[]>(this.apiHolidaysUrl);
  }

  public addNonWorkingHoliday(holiday: NonWorkingHoliday): Observable<NonWorkingHoliday> {
    return this.http.post<NonWorkingHoliday>(this.apiHolidaysUrl, holiday);
  }

  public editNonWorkingHoliday(holiday: NonWorkingHoliday): Observable<NonWorkingHoliday> {
    const updateUrl = `${this.apiHolidaysUrl}/${holiday.id}`;
    return this.http.put<NonWorkingHoliday>(updateUrl, holiday, this.httpOptions);
  }

  public getNonWorkingHoliday(holidayId: number): Observable<NonWorkingHoliday> {
    return this.http.get<NonWorkingHoliday>(`${this.apiHolidaysUrl}/${holidayId}`);
  }

  public deleteNonWorkingHoliday(holiday: NonWorkingHoliday): Observable<NonWorkingHoliday> {
    const deleteUrl = `${this.apiHolidaysUrl}/${holiday.id}`;
    return this.http.delete<NonWorkingHoliday>(deleteUrl, this.httpOptions);
  }
}
