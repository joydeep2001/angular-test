import { TestBed } from '@angular/core/testing';

import { GetServiceService } from './get-service.service';

describe('GetServiceService', () => {
  let service: GetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
