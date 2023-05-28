import { TestBed } from '@angular/core/testing';

import { EmployeeTService } from './employee-t.service';

describe('EmployeeTService', () => {
  let service: EmployeeTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
