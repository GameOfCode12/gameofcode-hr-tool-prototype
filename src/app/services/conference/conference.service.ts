import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conference } from 'src/app/models/conference.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConferenceService {
  apiConferenceUrl = `${environment.api_url}/conferences`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}
  /** GET: Retrieve all conferences/trainings from server */
  getConferences(): Observable<Conference[]> {
    return this.http.get<Conference[]>(this.apiConferenceUrl, this.httpOptions);
  }
  /**GET: Retrieve conference/training by id from server */
  getConference(conference: Conference): Observable<Conference> {
    return this.http.get<Conference>(`${this.apiConferenceUrl}/${conference.id}`, this.httpOptions);
  }
  /**POST: Create conference/training on server */
  createConference(conference: Conference): Observable<Conference> {
    return this.http.post<Conference>(this.apiConferenceUrl, conference, this.httpOptions);
  }
  /**PUT: Update conference/training on server */
  updateConference(conference: Conference): Observable<Conference> {
    const updateUrl = `${this.apiConferenceUrl}/${conference.id}`;
    return this.http.put<Conference>(updateUrl, conference, this.httpOptions);
  }
  /** DELETE: Delete conference/training on server */
  deleteConference(conference: Conference): Observable<Conference> {
    const deleteUrl = `${this.apiConferenceUrl}/${conference.id}`;
    return this.http.delete<Conference>(deleteUrl, this.httpOptions);
  }
}
