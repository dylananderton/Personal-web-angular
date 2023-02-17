import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/';
  apiKey = '3db8a81456f7472364c694553a60c330';

  constructor(private http: HttpClient) {}

  getWeatherDataByCoords(lat:any, lon:any) {
    let params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'imperial')
      .set('appid', this.apiKey);

      return this.http.get(this.url, { params });
  }
}
