import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth/auth.service';

import { RoutePaths } from 'src/app/route-paths.enum';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {

  isLogged: boolean = false;

  routePaths: typeof RoutePaths;

  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.isLogged = this.authService.isLoggedIn;
    this.routePaths = RoutePaths;
  }
}
