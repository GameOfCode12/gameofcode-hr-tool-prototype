import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { NotificationService } from '../../services/notification/notification.service';
import { UserLogin } from '../../models/user.model';
import emailFilter from '../../utils/emailFilter';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiAuthUrl = `${environment.api_url}/auth/local`;
  apiGoogleAuthUrl = `${environment.api_url}/auth/google/callback?access_token=`;
  public error: string = 'Invalid e-mail';
  userData: any;
  public authToken: string;
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private router: Router, private notificationService: NotificationService) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

    if (localStorage.getItem('currentUser')) {
      this.userData = JSON.parse(localStorage.getItem('currentUser'));
      this.authToken = localStorage.getItem('currentJwt');
    }
  }

  login(user: UserLogin): Observable<any> {
    return this.http
      .post<any>(this.apiAuthUrl, {
        identifier: user.username,
        password: user.password,
      })
      .pipe(
        map((response) => {
          // login successful if there's a jwt token in the response
          if (response.jwt && response.user && response.user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(response.user));
            localStorage.setItem('currentJwt', response.jwt);
            this.userData = response.user;
            this.authToken = localStorage.getItem('currentJwt');
            this.currentUserSubject.next(response.user);
          }
          return response.user;
        })
      );
  }

  loginViaGoogle(accessToken: string): Observable<any> {
    return this.http.get(this.apiGoogleAuthUrl + accessToken).pipe(
      map((response: any) => {
        if (response.jwt && response.user && response.user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(response.user));
          localStorage.setItem('currentJwt', response.jwt);
          this.userData = response.user;
          this.authToken = localStorage.getItem('currentJwt');
          this.currentUserSubject.next(response.user);
        } else {
          this.router.navigateByUrl('/login');
          //alert('Email not valid');
          //throw new Error(this.error);
          this.notificationService.showError('Please enter valid Cape Ann email.');
        }
        return response.user;
      })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentJwt');
    this.currentUserSubject.next(null);
    this.router.navigate(['login']);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    return user !== null && user.emailVerified !== false ? true : false;
  }

  get isSeniorManager(): boolean {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    return user.role.type === 'senior_management' ? true : false;
  }
}
