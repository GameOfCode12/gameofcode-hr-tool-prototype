import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { BookCheckout } from '../../../models/book.model';

import { BookCheckoutService } from '../../../services/book-checkout/book-checkout.service';

import { ActionDialogComponent } from '../../action-dialog/action-dialog.component';

@Component({
  selector: 'app-book-checkout',
  templateUrl: './book-checkout.component.html',
  styleUrls: ['./book-checkout.component.css']
})
export class BookCheckoutComponent implements OnInit {

  bookCheckouts: BookCheckout[] = [];
  public columns = [
    'employeeName',
    'bookTitle',
    'bookAuthor',
    'dateBorrowed',
    'dateReturned',
    'action'
  ];


  constructor(
    private bookCheckoutService: BookCheckoutService,
    private dialog: MatDialog
  ) {}

  getBookCheckouts(): void {
    this.bookCheckoutService.getBookCheckouts().subscribe(bookCheckouts => {
      this.bookCheckouts = bookCheckouts;
    });
  }

  deleteBookCheckout(bookCheckout: BookCheckout): void {
    const deleteActionDialogConfig = new MatDialogConfig();
    deleteActionDialogConfig.disableClose = true;
    deleteActionDialogConfig.width = '600px';
    deleteActionDialogConfig.data = {
      status: '',
      action: 'delete',
      item: 'Book Checkout',
    };

    const dialogActionRef = this.dialog.open(ActionDialogComponent, deleteActionDialogConfig);

    dialogActionRef.afterClosed().subscribe(status => {
       if(status === 'yes'){
          this.bookCheckouts = this.bookCheckouts.filter(el => el !== bookCheckout);
          this.bookCheckoutService.deleteBookCheckout(bookCheckout).subscribe();
       }
    });

  }



  ngOnInit(): void {
    this.getBookCheckouts();
  }

}
