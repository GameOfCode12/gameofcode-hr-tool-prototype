import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class VacationService {
  constructor(private http: HttpClient) {}

  private headers = new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('currentJwt')}`,
  });
}
