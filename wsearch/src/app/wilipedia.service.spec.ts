import { TestBed } from '@angular/core/testing';

import { WilipediaService } from './wilipedia.service';

describe('WilipediaService', () => {
  let service: WilipediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WilipediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
