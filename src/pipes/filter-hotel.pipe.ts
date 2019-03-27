import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterHotel'
})
export class FilterHotelPipe implements PipeTransform {
  transform(hotelsList, hotelStar, searchInputText): any {

      if(!searchInputText) {
          return this.sortStars(hotelsList, hotelStar);
      }

      const filteredHotels = hotelsList.filter(hotel => {
        return `${hotel.title.toLowerCase()}${hotel.description.toLowerCase()}`
          .includes(searchInputText.toLowerCase()); 
      });

      return this.sortStars(filteredHotels, hotelStar);
  }

  public sortStars(hotelsList, hotelStar){
    if(hotelStar == 0) {
      return hotelsList;
    }
    return hotelsList.filter(hotel => hotel.stars == hotelStar);
  }

}
