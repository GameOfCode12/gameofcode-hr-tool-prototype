import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Salary } from 'src/app/models/salary.model';
import { SalaryService } from 'src/app/services/salary/salary.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActionDialogComponent } from 'src/app/components/action-dialog/action-dialog.component';

@Component({
  selector: 'app-detail-salary',
  templateUrl: './detail-salary.component.html',
  styleUrls: ['./detail-salary.component.css'],
})
export class DetailSalaryComponent implements OnInit {
  salaryId: number = +this.route.snapshot.paramMap.get('id');
  salary: Salary;

  constructor(private route: ActivatedRoute, private salaryService: SalaryService, private dialog: MatDialog) {}

  getSalary(): void {
    this.salaryService.getSalary(this.salaryId).subscribe((salary) => {
      this.salary = salary;
    });
  }

  approveSalaryRaise(): void {
    const approveSalaryRaiseActionDialogConfig = new MatDialogConfig();
    approveSalaryRaiseActionDialogConfig.disableClose = true;
    approveSalaryRaiseActionDialogConfig.width = '600px';
    approveSalaryRaiseActionDialogConfig.data = {
      status: '',
      action: 'approve',
      item: 'salary raise',
    };

    const dialogActionRef = this.dialog.open(ActionDialogComponent, approveSalaryRaiseActionDialogConfig);

    dialogActionRef.afterClosed().subscribe((status) => {
      let approvedSalary = <Salary>{};
      if (status === 'yes') {
        approvedSalary.final = this.salary.salary + this.salary.suggestedRaise;
        approvedSalary.salaryBumpHistory = this.salary.salary;
        approvedSalary.lastRaise = this.salary.suggestedRaise;
        approvedSalary.lastRaiseDate = new Date();
        approvedSalary.salary = approvedSalary.final;
        approvedSalary.suggestedRaise = 0;
        this.salaryService.updateSalary(approvedSalary).subscribe((salary) => {
          this.salary = salary;
        });
      }
    });
  }

  ngOnInit(): void {
    this.getSalary();
  }
}
