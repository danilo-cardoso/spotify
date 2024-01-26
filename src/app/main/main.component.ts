import { Component, OnInit } from '@angular/core';
import { CardInterface } from '../interfaces/card-interface';
import { CardRouteServiceService } from '../services/card-route-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  implements OnInit {

  cardList: Array<CardInterface> = [];

  constructor(private service: CardRouteServiceService) { }

  ngOnInit(): void {
    this.cardList = this.service.listar();
  }
}
