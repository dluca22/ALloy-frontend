import { TestBed } from '@angular/core/testing';

import { SocketUpdatesService } from './socket-updates.service';

describe('SocketUpdatesService', () => {
  let service: SocketUpdatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketUpdatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
