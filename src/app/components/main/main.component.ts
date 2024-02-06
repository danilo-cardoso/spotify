import { Artists } from '../../interfaces/artists';
import { Component, OnInit } from '@angular/core';
import { CardInterface } from '../../interfaces/card-interface';
import { CardRouteService } from '../../services/card-route.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  cardList: Array<CardInterface> = [];
  artistList: Artists[] = [];
  filtroBusca = '';

  constructor(private service: CardRouteService) {}

  ngOnInit(): void {
    this.cardList = this.service.listar();
  }

  buscarArtista(): void {
    this.service.buscar(this.filtroBusca).subscribe((listaArtistas) => {
      this.artistList = listaArtistas;
    });
  }
}
