import { Component, Input } from '@angular/core';
import { Artists } from 'src/app/interfaces/artists';

@Component({
  selector: 'app-artist-cards',
  templateUrl: './artist-cards.component.html',
  styleUrls: ['./artist-cards.component.css']
})
export class ArtistCardsComponent {
  @Input() artist: Artists = {
    id: 0,
    name: '',
    urlImg: '',
    genre:''
  }
}
