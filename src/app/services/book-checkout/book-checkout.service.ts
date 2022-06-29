import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookCheckout } from 'src/app/models/book.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookCheckoutService {

  apiBookCheckoutsUrl = `${environment.api_url}/book-checkouts`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient
  ) {}

  /** GET: Retrieve all book checkouts from server */
  getBookCheckouts():Observable<BookCheckout[]>{
    return this.http.get<BookCheckout[]>(`${this.apiBookCheckoutsUrl}/short`);
  }
  /** GET: Retrieve book checkout from server */
  getBookCheckout(id: number):Observable<BookCheckout>{
    return this.http.get<BookCheckout>(`${this.apiBookCheckoutsUrl}/short/${id}`);
  }
  /** POST: Add book checkout to server */
  addBookCheckout(bookCheckout: BookCheckout):Observable<BookCheckout>{
    return this.http.post<BookCheckout>(`${this.apiBookCheckoutsUrl}/short`, bookCheckout, this.httpOptions);
  }
  /** PUT: Update book checkout on Server */
  updateBookCheckout(bookCheckout: BookCheckout, bookCheckoutId:number):Observable<BookCheckout>{
    const updateUrl = `${this.apiBookCheckoutsUrl}/short/${bookCheckoutId}`;
    return this.http.put<BookCheckout>(updateUrl, bookCheckout, this.httpOptions);
  }
  /** DELETE: Delete book checkout from Server  */
  deleteBookCheckout(bookCheckout: BookCheckout):Observable<BookCheckout>{
    const id = typeof bookCheckout === 'number' ? bookCheckout : bookCheckout.id;
    const deleteUrl = `${this.apiBookCheckoutsUrl}/${id}`;
    return this.http.delete<BookCheckout>(deleteUrl, this.httpOptions);
  }
}
