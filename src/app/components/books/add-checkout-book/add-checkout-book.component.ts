import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { Employee } from 'src/app/models/employee.model';
import { BookService } from '../../../services/book/book.service';
import { EmployeeService } from '../../../services/employee/employee.service';
import { BookCheckoutService } from 'src/app/services/book-checkout/book-checkout.service';

@Component({
  selector: 'app-add-checkout-book',
  templateUrl: './add-checkout-book.component.html',
  styleUrls: ['./add-checkout-book.component.css']
})
export class AddCheckoutBookComponent implements OnInit {

  books: Book[] = [];
  employees: Employee[] = [];

  constructor(
    private bookService: BookService,
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private bookCheckoutService: BookCheckoutService,
    private router: Router
  ) {}
  addCheckoutBookForm: FormGroup = this.formBuilder.group({
    employeeId: ['', Validators.required],
    bookId: ['', Validators.required],
    dateBorrowed: ['', Validators.required],
    dateReturned: ['']
  });
  private getBooks(): void {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }
  private getEmployee(): void {
    this.employeeService.getEmployees().subscribe(
      employees => {
        this.employees = employees;
      }
    );
  }

  addBookCheckout(): void {
    this.bookCheckoutService.addBookCheckout(this.addCheckoutBookForm.value).subscribe();
    this.router.navigate(['books/book-checkout']);
  }

  ngOnInit(): void {
    this.getBooks();
    this.getEmployee();
  }
}
