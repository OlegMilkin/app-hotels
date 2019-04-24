import { Component, OnInit } from '@angular/core';
import {HotelsService} from '../hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './app-hotels.component.html',
  styleUrls: ['./app-hotels.component.css']
})

export class AppHotelsComponent implements OnInit {

  public hotels: any = [];
  public selectedHotel: any;

  ngOnInit() {
    this._hotelsService.getAllHotels().subscribe(hotels => this.hotels = hotels);
    this._hotelsService.getSelectedHotel().subscribe(selectedHotel => this.selectedHotel = selectedHotel);
  }

  constructor(private _hotelsService: HotelsService) {
  }

  public stars: IStars[] = [
    {
      value: 0,
      title: 'Reset'
    },
    {
      value: 3,
      title: 'Three'
    },
    {
      value: 4,
      title: 'Four'
    },
    {
      value: 5,
      title: 'Five'
    }
  ];
  public favoriteHotelsList = [];

  public selectHotel(hotel) {
    this.selectedHotel = hotel;
  }

  public hotelStar: number = 0;
  public searchInputText: string = '';

  public addToFavorite(hotel) {

    let isHotelAdded = this.favoriteHotelsList.some(function(hotelItem) {
      return hotelItem.id == hotel.id;
    });

    if (!isHotelAdded) {
      this.favoriteHotelsList.push(hotel);
    } else {
      alert('Этот отель уже добавлен');
    }
  }

  starsFilter(star) {
    this.hotelStar = star;
  }
}
