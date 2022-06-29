import { AuthService } from './../../services/auth/auth.service';
import { EmployeeService } from './../../services/employee/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  employee: Employee;

  constructor(private employeeService: EmployeeService, private authService: AuthService) {}

  ngOnInit(): void {
    this.getUserEmployee();
  }

  private getUserEmployee(): void {
    this.employeeService.getUserEmployee().subscribe((employee) => (this.employee = employee));
  }

  public logOut(): void {
    this.authService.logout();
  }
}
