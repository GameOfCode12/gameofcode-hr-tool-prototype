import { TestBed } from '@angular/core/testing';

import { BookCheckoutService } from './book-checkout.service';

describe('BookCheckoutService', () => {
  let service: BookCheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookCheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
