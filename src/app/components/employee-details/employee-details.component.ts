import { NotificationService } from './../../services/notification/notification.service';
import { SetPastEmployeeComponent } from './../set-past-employee/set-past-employee.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from './../../services/employee/employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutePaths } from 'src/app/route-paths.enum';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;
  employeeId: number = +this.route.snapshot.paramMap.get('id');
  routePaths: typeof RoutePaths = RoutePaths;
  constructor(
    private employeeService: EmployeeService,
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'skill-level-star',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/grade-24px.svg')
    );
  }

  private getEmployee(): void {
    this.employeeService.getEmployeeByID(this.employeeId).subscribe(
      (employee) => {
        this.employee = employee;
      },
      (err) => {
        this.notificationService.showError('Employee not found.');
        this.router.navigate(['']);
      }
    );
  }

  public openSetPastEmployeeDialog(): void {
    const dialogOptions = new MatDialogConfig();
    dialogOptions.disableClose = true;
    dialogOptions.width = '600px';
    dialogOptions.data = {};

    const dialogRef = this.dialog.open(SetPastEmployeeComponent, dialogOptions);
    dialogRef.afterClosed().subscribe((data) => {
      if (!data) return;
      this.employee = {
        ...this.employee,
        ...data,
      };
      this.employeeService.updateEmployee(this.employee).subscribe(
        () => this.router.navigate(['']),
        (err) => this.notificationService.showError()
      );
    });
  }

  ngOnInit(): void {
    this.getEmployee();
  }
}
