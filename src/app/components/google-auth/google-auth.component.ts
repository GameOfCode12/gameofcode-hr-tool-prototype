import { RoutePaths } from 'src/app/route-paths.enum';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.css'],
})
export class GoogleAuthComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const accessToken = new URLSearchParams(window.location.href).get('access_token');
    this.authService.loginViaGoogle(accessToken).subscribe(
      () => this.router.navigate([RoutePaths.Employees]),
      (err) => console.error('Login failed: ', err)
    );
  }
}
