import { Injectable } from '@angular/core';
import jsonFile from '../../../data/card-data.json';
import { CardInterface } from '../interfaces/card-interface';

@Injectable({
  providedIn: 'root'
})
export class CardRouteServiceService {

  private readonly json: Array<CardInterface> = jsonFile.cards;

  constructor() { }

  listar(): Array<CardInterface>  {
    return this.json;
  }
}
