import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Salary } from 'src/app/models/salary.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalaryService {
  apiSalaryUrl = `${environment.api_url}/salaries`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}
  /**GET: retrieve all salaries from server */
  getSalaries(): Observable<Salary[]> {
    return this.http.get<Salary[]>(this.apiSalaryUrl);
  }
  /**GET: retrieve salary by id from server */
  getSalary(salaryId: number): Observable<Salary> {
    return this.http.get<Salary>(`${this.apiSalaryUrl}/${salaryId}`);
  }
  /**POST: create salary on server */
  createSalary(salary: Salary): Observable<Salary> {
    return this.http.post<Salary>(this.apiSalaryUrl, salary, this.httpOptions);
  }
  /**PUT: update salary on server */
  updateSalary(salary: Salary): Observable<Salary> {
    const updateUrl = `${this.apiSalaryUrl}/${salary.id}`;
    return this.http.put<Salary>(updateUrl, salary, this.httpOptions);
  }
  /**DELETE: delete salary from server */
  deleteSalary(salaryId: number): Observable<Salary> {
    const deleteUrl = `${this.apiSalaryUrl}/${salaryId}`;
    return this.http.delete<Salary>(deleteUrl, this.httpOptions);
  }
}
