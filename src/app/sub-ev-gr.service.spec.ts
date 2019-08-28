import { TestBed } from '@angular/core/testing';

import { SubEvGrService } from './sub-ev-gr.service';

describe('SubEvGrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubEvGrService = TestBed.get(SubEvGrService);
    expect(service).toBeTruthy();
  });
});
