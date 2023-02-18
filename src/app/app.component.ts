import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: []
})
export class AppComponent implements OnInit{

  title = 'Personal-Website';

  constructor(){}

  ngOnInit(): void {
  
  }
  
}
