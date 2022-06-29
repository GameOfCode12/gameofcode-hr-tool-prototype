import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EmployeesSkills } from '../../models/employeesSkills.model';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class EmployeesSkillsService {
  apiEmployeesSkillsUrl = `${environment.api_url}/skills`;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  public getEmployeesSkills(): Observable<EmployeesSkills[]> {
    return this.http.get<EmployeesSkills[]>(this.apiEmployeesSkillsUrl);
  }
  public getEmployeesByTechSkill(skillName: String): Observable<EmployeesSkills> {
    return this.http.get<EmployeesSkills>(`${this.apiEmployeesSkillsUrl}/${skillName}`);
  }
  public getEmployeesByGeneralRank(generalRank: String): Observable<EmployeesSkills> {
    return this.http.get<EmployeesSkills>(`${this.apiEmployeesSkillsUrl}/${generalRank}`);
  }
}
