import { TestBed } from '@angular/core/testing';

import { MensajesService } from './services/mensajes.service';

describe('MensajesService', () => {
  let service: MensajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
