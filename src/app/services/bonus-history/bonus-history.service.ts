import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { SalaryBonusHistory } from 'src/app/models/salaryBonus.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BonusHistoryService {

  apiBonusHistoryUrl = `${environment.api_url}/bonus-histories`;

  constructor(
    private http: HttpClient
  ) {}

  /**GET: Retrieve all bonuses history from server */
  getBonusesHistory(): Observable<SalaryBonusHistory[]> {
    return this.http.get<SalaryBonusHistory[]>(this.apiBonusHistoryUrl);
  }

}
