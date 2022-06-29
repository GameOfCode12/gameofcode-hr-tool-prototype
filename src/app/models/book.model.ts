export class Book {
  id?: number;
  title: string;
  author: string;
  publisher: string;
  placeOfPublication: string;
  copyrightDate: Date;
  numberOfCopies: number;
  available: boolean;
}

export class BookCheckout {
  id?: number;
  employeeId?: number;
  employeeName: string;
  bookId?: number;
  bookTitle: string;
  bookAuthor: string;
  dateBorrowed: Date;
  dateReturned: Date;
}
