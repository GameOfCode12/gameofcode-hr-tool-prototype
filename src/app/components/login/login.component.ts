import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { RoutePaths } from '../../route-paths.enum';
import { environment } from './../../../environments/environment';
import { NotificationService } from '../../services/notification/notification.service';
import { AuthService } from '../../services/auth/auth.service';
//import { access } from 'fs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  error: void;
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService
  ) {}

  errorMessage: string;

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  public loginViaGoogle(): void {
    this.authService
      .loginViaGoogle((window.location.href = `${environment.api_url}/connect/google`))
      .pipe(first())
      .subscribe(
        (result) => (window.location.href = `${environment.api_url}/connect/google`)
        //(err) => (this.error = this.notificationService.showError('Email not valid'))
      );
  }

  public signIn(): void {
    this.authService.login(this.loginForm.value).subscribe(
      () => (window.location.href = ''), // refresh the page, re-rendering components

      (err) => (this.errorMessage = 'Invalid Username or Password')
    );
  }

  ngOnInit(): void {}
}
