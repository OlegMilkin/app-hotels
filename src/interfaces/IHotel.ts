interface IHotel {
  id: number;
  title: string;
  address: string;
  description: string;
  phone: string;
  picture: string;
  photos: string[];
  weather: IWeather;
  profile: IProfile;
  stars: number;
}

interface IWeather {
  temperature: number;
  wind: number;
  icon: string;
}

interface IProfile {
  followers: number;
  following: number;
  photo: string;
}
