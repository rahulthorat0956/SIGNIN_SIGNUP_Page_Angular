import { TestBed } from '@angular/core/testing';

import { RegistrationService } from './register-service.service';

describe('RegisterServiceService', () => {
  let service: RegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
