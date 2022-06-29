import { Employee } from 'src/app/models/employee.model';
import { Book } from './book.model';

export class BookRequest {
  book: Book;
  employee: Employee;
  approved: boolean;
}
