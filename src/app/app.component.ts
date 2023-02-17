import { Component } from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Personal-Website';

  ngOnInit(): void {
  console.log('Web ' + Breakpoints.Web);
  console.log('WebLandscape ' + Breakpoints.WebLandscape);
  console.log('WebPortrait ' + Breakpoints.WebPortrait);

  console.log('Tablet ' + Breakpoints.Tablet);
  console.log('TabletPortrait ' + Breakpoints.TabletPortrait);
  console.log('TabletLandscape ' + Breakpoints.TabletLandscape);

  console.log('Handset ' + Breakpoints.Handset);
  console.log('HandsetLandscape ' + Breakpoints.HandsetLandscape);
  console.log('HandsetPortrait ' + Breakpoints.HandsetPortrait);

  console.log('XSmall ' + Breakpoints.XSmall);
  console.log('Small ' + Breakpoints.Small);
  console.log('Medium ' + Breakpoints.Medium);
  console.log('Large ' + Breakpoints.Large);
  console.log('XLarge ' + Breakpoints.XLarge);
  
  }
  
}
