import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-weather-finder',
  templateUrl: './weather-finder.component.html',
  styleUrls: ['./weather-finder.component.css']
})
export class WeatherFinderComponent implements OnInit {

  lat:any;
  lon:any;
  weather:any;

  constructor(private weatherService : WeatherService) { }

  ngOnInit(){
    
  }

  getLocation(){
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition((success)=>{
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.weatherService.getWeatherDataByCoords(this.lat,this.lon).subscribe(data=>{
          this.weather = data;
        })
      })
    }
  }

}
