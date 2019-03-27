import { Component } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './app-hotels.component.html',
  styleUrls: ['./app-hotels.component.css']
})

export class AppHotelsComponent {

  public hotels: IHotel[] = [
    {
      id: 0,
      title: 'Universal Cabana',
      address: 'Orlando',
      description: 'Best one!',
      phone: '+1111111',
      picture: 'assets/images/1.jpg',
      photos: [
        'assets/images/res.jpg',
        'assets/images/r1.jpg'
      ],
      weather:  {
        temperature: 12,
        wind: 11,
        icon: 'sun'
      },
      profile: {
        followers: 112,
        following: 11,
        photo: 'assets/images/b1.jpg'
      },
      stars: 3
    },
    {
      id: 1,
      title: 'Kharkov plaza',
      address: 'Kharkov',
      description: 'sdfsdf sdfsdfsdf sdfsdfsdf',
      phone: '+2222222',
      picture: 'assets/images/2.jpg',
      photos: [
        'assets/images/res.jpg',
        'assets/images/r1.jpg'
      ],
      weather:  {
        temperature: 5,
        wind: 4,
        icon: 'rain'
      },
      profile: {
        followers: 12,
        following: 111,
        photo: 'assets/images/b2.jpg'
      },
      stars: 3
    },
    {
      id: 2,
      title: 'Hotel name',
      address: 'Orlando',
      description: 'Free WiFi is available. This apartment comes with 1 bedroom, a living room and a fully equipped kitchen.',
      phone: '+33333333',
      picture: 'assets/images/3.jpg',
      photos: [
        'assets/images/res.jpg',
        'assets/images/r1.jpg'
      ],
      weather:  {
        temperature: -2,
        wind: 2,
        icon: 'cloud'
      },
      profile: {
        followers: 45,
        following: 78,
        photo: 'assets/images/b3.jpg'
      },
      stars: 5
    },
    {
      id: 3,
      title: 'Viva Castillo',
      address: 'Adress new',
      description: 'Viva Castillo is situated in Caleta De Fuste. The accommodation is 47 km from Corralejo.',
      phone: '+334234234',
      picture: 'assets/images/185979885.jpg',
      photos: [
        'assets/images/res.jpg',
        'assets/images/r1.jpg'
      ],
      weather:  {
        temperature: 20,
        wind: 3,
        icon: 'sun'
      },
      profile: {
        followers: 450,
        following: 786,
        photo: 'assets/images/b3.jpg'
      },
      stars: 4
    },
    {
      id: 4,
      title: 'Caleta Paraiso Opens in new window',
      address: 'Adress Paraiso',
      description: 'Caleta Paraiso is located in Caleta De Fuste and offers an outdoor swimming pool and a terrace.',
      phone: '+334234234',
      picture: 'assets/images/184604628.jpg',
      photos: [
        'assets/images/res.jpg',
        'assets/images/r1.jpg'
      ],
      weather:  {
        temperature: 18,
        wind: 3,
        icon: 'sun'
      },
      profile: {
        followers: 40,
        following: 76,
        photo: 'assets/images/b3.jpg'
      },
      stars: 3
    }
  ];

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

  public selectedHotel: IHotel = this.hotels[0];
  public favoriteHotelsList = [];

  public selectHotel(hotel) {
    this.selectedHotel = hotel;
  }

  public hotelStar: string = '';

  public searchInputText: string = '';

  public addToFavorite(hotel) {
    this.favoriteHotelsList.push(hotel);
  }

  starsFilter(star) {
    this.hotelStar = star;
  }
}
