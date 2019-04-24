import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppHotelsComponent } from './app-hotels/app-hotels.component';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { WeatherComponent } from './weather/weather.component';
import { FilterHotelPipe } from '../pipes/filter-hotel.pipe';
import { FavoritesComponent } from './favorites/favorites.component';
import { HotelsService } from './hotels.service';
import { MatPaginatorModule } from '@angular/material';

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
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatPaginatorModule
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
