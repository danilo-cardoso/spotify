import { Artists } from './../interfaces/artists';
import { Component, OnInit } from '@angular/core';
import { CardInterface } from '../interfaces/card-interface';
import { CardRouteServiceService } from '../services/card-route-service.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  cardList: Array<CardInterface> = [];
  artistList: Array<Artists> = [];
  filtroBusca = '';

  constructor(private service: CardRouteServiceService) { }

  ngOnInit(): void {
    this.cardList = this.service.listar();
  }

  buscarArtista(): void {
    if (this.filtroBusca.trim().length > 2) {
      this.service.buscar(this.filtroBusca).subscribe((listaArtistas) => {
        this.artistList = listaArtistas;
      })
    }
  }
}
