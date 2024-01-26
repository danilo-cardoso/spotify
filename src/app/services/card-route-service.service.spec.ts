import { TestBed } from '@angular/core/testing';

import { CardRouteServiceService } from './card-route-service.service';

describe('CardRouteServiceService', () => {
  let service: CardRouteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardRouteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
