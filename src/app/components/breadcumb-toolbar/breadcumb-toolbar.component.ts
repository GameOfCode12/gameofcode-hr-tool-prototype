import { Component, OnInit, Input, ChangeDetectorRef, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { RoutePaths } from '../../route-paths.enum';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddEmployerComponent } from '../add-employer/add-employer.component';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-breadcumb-toolbar',
  templateUrl: './breadcumb-toolbar.component.html',
  styleUrls: ['./breadcumb-toolbar.component.css'],
})
export class BreadcumbToolbarComponent implements OnInit {
  @Input() breadcumbPath: string;
  @ViewChild('tabGroup') tabGroup;

  pathArray = [];

  isLogged: boolean;

  userData;

  routePaths: typeof RoutePaths;

  constructor(
    private authService: AuthService,
    private employeeService: EmployeeService,
    public router: Router,
    private dialog: MatDialog
  ) {}

  logout(): void {
    this.authService.logout();
  }

  addEmployee(): void {
    const dialogOptions = new MatDialogConfig();
    dialogOptions.disableClose = false;
    dialogOptions.data = { parent: this };
    dialogOptions.maxWidth = '100vw';
    dialogOptions.maxHeight = '100vh';
    dialogOptions.height = '100%';
    dialogOptions.width = '100%';
    const dialogRef = this.dialog.open(AddEmployerComponent, dialogOptions);

    dialogRef.afterClosed().subscribe((data: Employee) => {
      if (!data) {
        // if cancel button was clicked
        dialogRef.close();
        return;
      }
      this.employeeService.addEmployer(data);
    });
  }
  isProjectPath(): boolean {
    return this.breadcumbPath.toLowerCase().includes('projects');
  }
  isTeamAllocationPath(): boolean {
    return this.breadcumbPath.toLowerCase().includes('team allocation');
  }
  isEditTeamAllocationPath(): boolean {
    return this.breadcumbPath.toLowerCase().includes('edit team allocation');
  }
  myTabSelectedIndexChange(index: number) {
    if (index === 1) {
      this.router.navigate([`${RoutePaths.TeamAllocation}`]);
    }
    if (index === 0) {
      this.router.navigate([`${RoutePaths.Projects}`]);
    }
  }
  ngOnInit(): void {
    this.pathArray = this.breadcumbPath.split('/');
    this.isLogged = this.authService.isLoggedIn;
    this.userData = this.authService.userData;
    this.routePaths = RoutePaths;
  }
}
