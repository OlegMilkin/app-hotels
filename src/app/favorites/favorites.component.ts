import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent {
  @Input('hotelItem') favoriteHotelsList;

  removeFavorite(index) {
    let confirmAnswer = confirm("Вы уверенны?");

    if (confirmAnswer) {
      this.favoriteHotelsList.splice(index, 1);
    }
  }
}
