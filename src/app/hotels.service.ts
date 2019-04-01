import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HotelsService {

  constructor(private _http: HttpClient) { }

  public getAllHotels() {
    return this._http.get('http://localhost:3000/hotels');
  }
}
