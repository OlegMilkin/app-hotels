import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterHotel'
})
export class FilterHotelPipe implements PipeTransform {
  transform(hotelsList, hotelStar): any {

      if(!hotelStar) {
          return hotelsList;
      }

      return hotelsList.filter(hotel => hotel.stars == hotelStar);
  }

}
