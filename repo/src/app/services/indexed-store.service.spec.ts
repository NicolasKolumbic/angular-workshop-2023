import { TestBed } from '@angular/core/testing';

import { IndexedStoreService } from './indexed-store.service';

describe('IndexedStoreService', () => {
  let service: IndexedStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexedStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
