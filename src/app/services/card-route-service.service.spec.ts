import { TestBed } from '@angular/core/testing';

import { CardRouteService } from './card-route.service';
import { HttpClientModule } from '@angular/common/http';

describe(CardRouteService.name, () => {
  let service: CardRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [],
    });
    service = TestBed.inject(CardRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${CardRouteService.prototype.buscar.name}
  should return filtered observable when connected to api`, (done: DoneFn) => {
    service.buscar('Mic').subscribe((value) => {
      const artistName = value[0].name;
      expect(artistName).toContain('Mic');
      done();
    });
  });

  it(`#${CardRouteService.prototype.listar.name}
  should return CardInterface array`, () => {
    const cardsArray = service.listar();
    expect(cardsArray).toBeTruthy();
  });
});
