import { TestBed } from '@angular/core/testing';

import { DataCollectorService } from './data-collector.service';

describe('DataCollectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataCollectorService = TestBed.inject(DataCollectorService);
    expect(service).toBeTruthy();
  });
});
