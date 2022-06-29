import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-action-dialog',
  templateUrl: './action-dialog.component.html',
  styleUrls: ['./action-dialog.component.css']
})
export class ActionDialogComponent implements OnInit {

  status: string;

  constructor(
    public dialogActionRef: MatDialogRef<ActionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}



  confirmAction():void {
    this.status = "yes";
    this.dialogActionRef.close(this.status);
  }
  declineAction():void {
    this.dialogActionRef.close();
  }

  ngOnInit(): void {
  }

}
