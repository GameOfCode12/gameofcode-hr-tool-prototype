import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Referral } from 'src/app/models/referral.model';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ReferralService {

  apiReferralUrl = `${environment.api_url}/referrals`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) {}

  /** GET: Retrieve all refferals from server */
  getReferrals(): Observable<Referral[]>{
    return this.http.get<Referral[]>(this.apiReferralUrl);
  }
  /** GET: Retrieve referral by id from server  */
  getReferral(referralId: number): Observable<Referral>{
    return this.http.get<Referral>(`${this.apiReferralUrl}/${referralId}`);
  }
  /** POST: create referral to server  */
  createReferal(referral: Referral): Observable<Referral> {
    return this.http.post<Referral>(this.apiReferralUrl, referral, this.httpOptions);
  }
  /** PUT: update referral on server */
  updateReferral(referral: Referral, referralId: number): Observable<Referral> {
    const updateUrl = `${this.apiReferralUrl}/${referralId}`;
    return this.http.put<Referral>(updateUrl, referral, this.httpOptions);
  }
  /** DELETE: delete referral from server */
  deleteReferral(referralId:number):Observable<Referral>{
    const deleteUrl = `${this.apiReferralUrl}/${referralId}`;
    return this.http.delete<Referral>(deleteUrl, this.httpOptions);
  }
}
