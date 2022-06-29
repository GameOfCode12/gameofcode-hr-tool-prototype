import { EmployeesSkills } from 'src/app/models/employeesSkills.model';
import { EmergencyContact } from './../../models/emergencyContact.model';
import { Employee } from './../../models/employee.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { RolesGroup } from 'src/app/models/role.model';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiEmployeesUrl = `${environment.api_url}/employees`;
  apiPastEmployeesUrl = `${environment.api_url}/past-employees`;
  apiEmergencyContactsUrl = `${environment.api_url}/emergency-contacts`;
  apiEmployeesSkillsUrl = `${environment.api_url}/skills`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}
  /** GET: Retrieve all employees from server */
  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiEmployeesUrl);
  }
  public getEmployeesSkills(): Observable<EmployeesSkills[]> {
    return this.http.get<EmployeesSkills[]>(this.apiEmployeesSkillsUrl);
  }
  /** GET: Retrieve all past employees from server */
  public getPastEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiPastEmployeesUrl);
  }

  public getEmergencyContacts(): Observable<EmergencyContact[]> {
    return this.http.get<EmergencyContact[]>(this.apiEmergencyContactsUrl);
  }

  /** GET: Get the employee data of the user */
  public getUserEmployee(): Observable<Employee> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('currentJwt')}`,
    });

    return this.http.get<Employee>(`${this.apiEmployeesUrl}/me`, {
      headers,
    });
  }

  /** GET: Get an employee by ID */
  public getEmployeeByID(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiEmployeesUrl}/${id}`);
  }

  /** POST: Add a new employer to server */
  public addEmployer(employer: Employee): Observable<Employee> {
    // return this.http.post<Employee>(`${environment.api_url}/employee-registration/`, employer, this.httpOptions).pipe(
    return this.http.post<Employee>(`${this.apiEmployeesUrl}`, employer, this.httpOptions).pipe(
      tap((_) => this.log('posted employer')),
      catchError(this.handleError<Employee>('addEmployer'))
    );
  }

  /** GET: Retrive all users roles */
  public getRoles(): Observable<RolesGroup> {
    return this.http.get<RolesGroup>(`${environment.api_url}/users-permissions/roles/`);
  }

  /** GET: Retrieve all managers */
  public getManagers(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${environment.api_url}/managers`);
  }
  public getActingManagers(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${environment.api_url}/managers/acting`);
  }

  /** PUT: Update an employee */
  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiEmployeesUrl}/${employee.id}`, employee, this.httpOptions);
  }

  /** Log a Employee message on console */
  private log(log: string) {
    console.log(`EmployeeService: ${log}`);
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
