import { getLocaleCurrencyCode } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-weather-finder',
  templateUrl: './weather-finder.component.html',
  styleUrls: ['./weather-finder.component.css']
})
export class WeatherFinderComponent implements OnInit {

  constructor() { }

  ngOnInit(){
  }

  onClick(value:any){
    console.log(value);
  }

}
