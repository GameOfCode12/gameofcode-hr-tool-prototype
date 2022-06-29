import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalaryBonus } from 'src/app/models/salaryBonus.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SalaryBonusService {
  apiSalaryBonusUrl = `${environment.api_url}/salary-bonuses`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}
  /**GET: retrieve all salary Bonuses from server */
  getSalaryBonuses(): Observable<SalaryBonus[]> {
    return this.http.get<SalaryBonus[]>(this.apiSalaryBonusUrl);
  }
  /**GET: retrieve salary bonus by id from server */
  getSalaryBonus(salaryBonusId: number): Observable<SalaryBonus> {
    return this.http.get<SalaryBonus>(`${this.apiSalaryBonusUrl}/${salaryBonusId}`);
  }
  /**POST: create salary bonus on server */
  createSalaryBonus(salaryBonus: SalaryBonus): Observable<SalaryBonus> {
    return this.http.post<SalaryBonus>(this.apiSalaryBonusUrl, salaryBonus, this.httpOptions);
  }
  /**PUT: update salary bonus on server */
  updateSalaryBonus(salaryBonus: Partial<SalaryBonus>): Observable<SalaryBonus> {
    const updateUrl = `${this.apiSalaryBonusUrl}/${salaryBonus.id}`;
    return this.http.put<any>(updateUrl, salaryBonus, this.httpOptions);
  }
  /**DELETE: delete salary bonus from server */
  deleteSalaryBonus(salaryBonusId: number): Observable<SalaryBonus> {
    const deleteUrl = `${this.apiSalaryBonusUrl}/${salaryBonusId}`;
    return this.http.delete<SalaryBonus>(deleteUrl, this.httpOptions);
  }
}
