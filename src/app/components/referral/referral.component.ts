import { Component, OnInit } from '@angular/core';
import { ReferralService } from 'src/app/services/referral/referral.service';
import { Referral } from 'src/app/models/referral.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActionDialogComponent } from 'src/app/components/action-dialog/action-dialog.component';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.css']
})
export class ReferralComponent implements OnInit {

  referrals: Referral[] = [];

  public referralColumns = [
    'firstName',
    'lastName',
    'employeeReferral',
    'trialEnds',
    'bonusPaid',
    'referralBonus',
    'note',
    'action'
  ];

  constructor(
    private referralService: ReferralService,
    private dialog: MatDialog
  ) {}

  getRefferals(): void {
    this.referralService.getReferrals().subscribe(
      referrals => {
        this.referrals = referrals;
      }
    )
  }

  deleteReferral(referral: Referral): void {
    const deleteActionDialogConfig = new MatDialogConfig();
    deleteActionDialogConfig.disableClose = true;
    deleteActionDialogConfig.width = '600px';
    deleteActionDialogConfig.data = {
      status: '',
      action: 'delete',
      item: 'referral',
    };

    const dialogActionRef = this.dialog.open(ActionDialogComponent, deleteActionDialogConfig);

    dialogActionRef.afterClosed().subscribe(status => {
       if(status === 'yes'){
          this.referrals = this.referrals.filter(el => el !== referral);
          this.referralService.deleteReferral(referral.id).subscribe();
       }
    });
  }

  ngOnInit(): void {
    this.getRefferals();
  }

}
