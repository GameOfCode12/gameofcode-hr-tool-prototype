import { Book } from './../../models/book.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {

  apiBookUrl = `${environment.api_url}/books/`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  /** GET: retrieve all books from server */
  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiBookUrl);
  }
  /** GET: retrieve book to server  */
  public getBook(bookId: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiBookUrl}${bookId}`);
  }
  /** POST: add book to server */
  public addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiBookUrl, book, this.httpOptions);
  }
  /** PUT: update book on server */
  public updateBook(book: Book, bookId: number): Observable<Book> {
    const updateUrl = `${this.apiBookUrl}${bookId}`;
    return this.http.put<Book>(updateUrl, book, this.httpOptions);
  }
  /** DELETE: delete book from server */
  public deleteBook(book:Book): Observable<Book> {
    const id = typeof book === 'number' ? book : book.id;
    const deleteUrl = `${this.apiBookUrl}${id}`;
    return this.http.delete<Book>(deleteUrl, this.httpOptions);
  }
}
