import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent {
  @Input('hotelItem') favoriteHotelsList;

  removeFavorite(index) {
    this.favoriteHotelsList.splice(index, 1);
  }
}
