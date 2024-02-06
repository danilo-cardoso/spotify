import { ComponentFixture, TestBed, inject, tick } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { CardRouteService } from 'src/app/services/card-route.service';
import { ArtistCardsComponent } from '../artist-cards/artist-cards.component';
import { Artists } from 'src/app/interfaces/artists';
import { Observable, of } from 'rxjs';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let cardService: CardRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [MainComponent, CardComponent, ArtistCardsComponent],
      providers: [CardRouteService],
    });
    cardService = TestBed.inject(CardRouteService);
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate component property cardList array with service information during ngOnInit', () => {
    fixture.detectChanges();
    expect(component.cardList).not.toEqual([]);
  });

  it(`#${MainComponent.prototype.buscarArtista.name} should call service.buscar method when called`, () => {
    let filter = 'mic';
    component.filtroBusca = filter;
    spyOn(cardService, 'buscar').and.returnValue(Observable.prototype);

    fixture.detectChanges();

    component.buscarArtista();
    expect(cardService.buscar).toHaveBeenCalled();
  });
});
