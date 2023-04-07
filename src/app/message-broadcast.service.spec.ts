import { TestBed } from '@angular/core/testing';

import { MessageBroadcastService } from './message-broadcast.service';

describe('MessageBroadcastService', () => {
  let service: MessageBroadcastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageBroadcastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
