import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import cardJson from '../../../data/card-data.json';
import { CardInterface } from '../interfaces/card-interface';
import { Artists } from '../interfaces/artists';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardRouteService {
  private readonly cardsJson: Array<CardInterface> = cardJson.cards;
  private readonly API = 'http://localhost:3000/artists';

  constructor(private http: HttpClient) {}

  listar(): CardInterface[] {
    return this.cardsJson;
  }

  buscar(filter: string): Observable<Artists[]> {
    const params = new HttpParams().set('q', filter);

    return this.http.get<Artists[]>(this.API, { params });
  }
}
