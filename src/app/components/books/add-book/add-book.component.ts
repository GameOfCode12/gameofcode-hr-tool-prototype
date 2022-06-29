import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BookService } from '../../../services/book/book.service'

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}


  addBookForm: FormGroup = this.formBuilder.group({
   title: ['', Validators.required],
   author:  ['', Validators.required],
   publisher: ['', Validators.required],
   placeOfPublication: ['', Validators.required],
   copyrightDate: ['', Validators.required],
   numberOfCopies: ['', Validators.required],
   available: ['', Validators.required],
  });

  addBook():void{
    this.bookService.addBook(this.addBookForm.value).subscribe();
    this.router.navigate(['books']);
  }

  ngOnInit(): void {
  }

}
