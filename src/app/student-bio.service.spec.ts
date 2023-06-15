import { TestBed } from '@angular/core/testing';

import { StudentBioService } from './student-bio.service';

describe('StudentBioService', () => {
  let service: StudentBioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentBioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
