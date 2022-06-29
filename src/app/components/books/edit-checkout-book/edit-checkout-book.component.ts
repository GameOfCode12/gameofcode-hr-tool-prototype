import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BookCheckoutService } from 'src/app/services/book-checkout/book-checkout.service';
import { BookService } from 'src/app/services/book/book.service';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Book, BookCheckout } from 'src/app/models/book.model';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-edit-checkout-book',
  templateUrl: './edit-checkout-book.component.html',
  styleUrls: ['./edit-checkout-book.component.css']
})
export class EditCheckoutBookComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private bookCheckoutService: BookCheckoutService,
    private bookService: BookService,
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  books: Book[] = [];
  employees: Employee[] = [];
  bookCheckoutId: number = +this.route.snapshot.paramMap.get('id');

  editBookCheckoutForm: FormGroup = this.formBuilder.group({
    employeeId: ['', Validators.required],
    bookId: ['', Validators.required],
    dateBorrowed: ['', Validators.required],
    dateReturned: ['']
  });

  getBookCheckout():void {
    this.bookCheckoutService.getBookCheckout(this.bookCheckoutId).subscribe(
      bookCheckout => {
        this.editBookCheckoutForm.patchValue({
          employeeId: bookCheckout.employeeId.toString(),
          bookId: bookCheckout.bookId.toString(),
          dateBorrowed: bookCheckout.dateBorrowed,
          dateReturned: bookCheckout.dateReturned,
        });
      }
    );
  }
  private getBooks(): void {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }
  private getEmployee(): void {
    this.employeeService.getEmployees().subscribe(
      employee => {
        this.employees = employee;
      }
    );
  }

  updateBookCheckout():void{
    this.bookCheckoutService.updateBookCheckout(this.editBookCheckoutForm.value, this.bookCheckoutId).subscribe();
    this.router.navigate(['books/book-checkout']);
  }

  ngOnInit(): void {
    this.getBooks();
    this.getEmployee();
    this.getBookCheckout();
  }
}
