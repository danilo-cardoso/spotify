import { Component, Input } from '@angular/core';
import { CardInterface } from 'src/app/interfaces/card-interface';
import { CardRouteService } from 'src/app/services/card-route.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() card: CardInterface = {
    id: 0,
    title: '',
    img: '',
    color: '',
  };

  constructor(private service: CardRouteService) {}
}
