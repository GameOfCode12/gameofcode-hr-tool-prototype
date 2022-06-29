import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from '../../../services/book/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  book: Book;
  bookId: number = +this.route.snapshot.paramMap.get('id');

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  editBookForm:FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    author:  ['', Validators.required],
    publisher: ['', Validators.required],
    placeOfPublication: ['', Validators.required],
    copyrightDate: ['', Validators.required],
    numberOfCopies: ['', Validators.required],
    available: ['', Validators.required],
  });

  getBook():void {
    this.bookService.getBook(this.bookId).subscribe(book => {
      this.book = book;
      this.editBookForm.patchValue({
        title: book.title,
        author: book.author,
        publisher: book.publisher,
        placeOfPublication: book.placeOfPublication,
        copyrightDate: book.copyrightDate,
        numberOfCopies: book.numberOfCopies,
        available: book.available
      });
    });
  }

  updateBook():void {
    this.bookService.updateBook(this.editBookForm.value, this.bookId).subscribe(
      book => {
        this.router.navigate(['books']);
      }
    );
  }

  ngOnInit(): void {
    this.getBook();
  }

}
