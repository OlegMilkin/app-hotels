import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppHotelsComponent } from './app-hotels/app-hotels.component';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { WeatherComponent } from './weather/weather.component';
import { FilterHotelPipe } from '../pipes/filter-hotel.pipe';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHotelsComponent,
    ListComponent,
    ProfileComponent,
    WeatherComponent,
    FilterHotelPipe,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
